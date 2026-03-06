import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ImageGroup = ({ data = [], avatarSize = "avatar-sm", avatarMore, avatarStyle }) => {
    return (
        <>
            {data.map(({ user_name, user_img, id }, index) => {
                const getInitials = (name) => {
                    if (!name) return "";
                    let words = name.split(" ");
                    if (words.length > 1) {
                        return (words[0][0] + words[1][0]).toUpperCase();
                    } else {
                        return words[0][0].toUpperCase();
                    }
                };

                return (
                    user_img ? (
                        <Link key={index} href="#" className={`avatar-image ${avatarSize}`} data-bs-toggle="tooltip" data-bs-trigger="hover" title={user_name}>
                            <img src={user_img} className="img-fluid" alt="image" />
                        </Link>
                    ) : (
                        <div key={index} className={`avatar-text user-avatar-text text-white ${avatarSize}`} data-bs-toggle="tooltip" data-bs-trigger="hover" title={user_name}>
                            {getInitials(user_name)}
                        </div>
                    )
                );
            })}
            <Link href="#" className={`avatar-text ${avatarSize} ${avatarStyle}`} data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explore More">
                {avatarMore || <FiMoreHorizontal />}
            </Link>
        </>
    )
}

export default ImageGroup