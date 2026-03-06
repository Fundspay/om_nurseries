import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiAlignRight, FiArrowLeft, FiDownload } from 'react-icons/fi'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const PageHeader = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const pathName = useLocation().pathname
    let folderName = ""
    let fileName = ""
    if (pathName === "/") {
        folderName = "OM Farms Nursery"
        fileName = "Operations Dashboard"
    } else {
        folderName = pathName.split("/")[1]
        fileName = pathName.split("/")[2]
    }

    if (pathName === "/dashboards/manager") {
        fileName = "Nursery Operations Manager Dashboard"
    }

    const [isExporting, setIsExporting] = useState(false);

    const exportPDF = () => {
        setIsExporting(true);
        const input = document.querySelector('.main-content'); // Target main body content
        html2canvas(input, {
            scale: 2,
            useCORS: true,
            logging: false,
            windowHeight: input.scrollHeight
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const imgHeight = (canvas.height * pdfWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            // Add first page
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add subsequent pages if content is taller than one A4 page
            while (heightLeft > 0) {
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save(`${folderName}_export.pdf`);
            setIsExporting(false);
        }).catch(err => {
            console.error("PDF Export Error: ", err);
            setIsExporting(false);
        });
    };

    return (
        <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
                <div className="page-header-title">
                    <h5 className="m-b-10 text-capitalize">{folderName}</h5>
                </div>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item text-capitalize">{fileName}</li>
                </ul>
            </div>
            <div className="page-header-right ms-auto">
                <div className={`page-header-right-items ${openSidebar ? "page-header-right-open" : ""}`}>
                    <div className="d-flex d-md-none">
                        <Link to="#" onClick={() => setOpenSidebar(false)} className="page-header-right-close-toggle">
                            <FiArrowLeft size={16} className="me-2" />
                            <span>Back</span>
                        </Link>
                    </div>
                    {children}
                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                            onClick={exportPDF}
                            disabled={isExporting}
                        >
                            <FiDownload />
                            {isExporting ? 'Exporting...' : 'Export as PDF'}
                        </button>
                    </div>
                </div>
                <div className="d-md-none d-flex align-items-center">
                    <Link to="#" onClick={() => setOpenSidebar(true)} className="page-header-right-open-toggle">
                        <FiAlignRight className="fs-20" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageHeader
