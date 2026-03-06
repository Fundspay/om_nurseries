import React, { useState } from 'react'
import CardHeader from '@/components/shared/CardHeader'
import Pagination from '@/components/shared/Pagination'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { taskAssigneeOptions, taskPriorityOptions, taskStatusOptions } from '@/utils/options'
import SelectDropdown from '@/components/shared/SelectDropdown'

const tasksData = [
    { taskNumber: '01', taskName: 'Prune Zone A rose bushes', taskDate: '20/10/2023', taskDescription: 'Trim dead branches and apply fungicide.', status: taskStatusOptions, priority: taskPriorityOptions, assignee: taskAssigneeOptions },
    { taskNumber: '02', taskName: 'Fertilize Batch 2 saplings', taskDate: '21/10/2023', taskDescription: 'Use NPK 19-19-19 mix for the new mango saplings.', status: taskStatusOptions, priority: taskPriorityOptions, assignee: taskAssigneeOptions },
    { taskNumber: '03', taskName: 'Irrigation system maintenance', taskDate: '22/10/2023', taskDescription: 'Check for clogged drip emitters in Greenhouse 1.', status: taskStatusOptions, priority: taskPriorityOptions, assignee: taskAssigneeOptions },
    { taskNumber: '04', taskName: 'Audit incoming seed inventory', taskDate: '23/10/2023', taskDescription: 'Verify quantities and quality of the new seed shipment.', status: taskStatusOptions, priority: taskPriorityOptions, assignee: taskAssigneeOptions },
    { taskNumber: '05', taskName: 'Pest inspection in Zone C', taskDate: '24/10/2023', taskDescription: 'Look for aphids and spray organic pesticide if needed.', status: taskStatusOptions, priority: taskPriorityOptions, assignee: taskAssigneeOptions },
];
const Tasks = ({ title }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    const defaultStatusList = ["inprogress", "completed", "upcoming", "completed", "upcoming"]
    const defaultPriorityList = ["high", "urgent", "medium", "urgent", "medium"]
    const defaultAssigneeList = ["anamikasharma@gmail.com", "suhas@gmail.com", "sana@gmail.com", "rahul@gmail.com", "priya@outlook.com"]
    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full widget-tasks-content ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body p-0">
                    <div className="table-responsive tasks-items-wrapper">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tasks</th>
                                    <th className="wd-250">Status</th>
                                    <th className="wd-250">Priority</th>
                                    <th className="wd-300">Assigned</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasksData.map(({ taskDate, taskDescription, taskName, taskNumber, assignee, priority, status }, index) => {
                                    const statusValue = status.find((v) => v.value === defaultStatusList[index])
                                    const priorityValue = priority.find((v) => v.value === defaultPriorityList[index])
                                    const assigneeValue = assignee.find((v) => v.value === defaultAssigneeList[index])
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <div className="avatar-text bg-gray-200">{taskNumber}</div>
                                            </td>
                                            <td>
                                                <a href="#">{taskName} <span className="fs-12 fw-normal text-muted">({taskDate})</span> </a>
                                                <p className="fs-12 text-muted mt-2 text-truncate-1-line tasks-sort-desc">{taskDescription}</p>
                                                <div className="tasks-list-action d-flex align-items-center gap-3">
                                                    <a href="#">Start</a>
                                                    <span>|</span>
                                                    <a href="#">Edit</a>
                                                    <span>|</span>
                                                    <a href="#" className="text-danger">Delete</a>
                                                </div>
                                            </td>
                                            <td>
                                                <SelectDropdown
                                                    options={status}
                                                    selectedOption={selectedOption}
                                                    defaultSelect={statusValue?.value}
                                                    onSelectOption={(option) => setSelectedOption(option)}
                                                />
                                            </td>
                                            <td>
                                                <SelectDropdown
                                                    options={priority}
                                                    selectedOption={selectedOption}
                                                    defaultSelect={priorityValue?.value}
                                                    onSelectOption={(option) => setSelectedOption(option)}
                                                />
                                            </td>
                                            <td>
                                                <SelectDropdown
                                                    options={assignee}
                                                    selectedOption={selectedOption}
                                                    defaultSelect={assigneeValue?.value}
                                                    onSelectOption={(option) => setSelectedOption(option)}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card-footer"> <Pagination /></div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default Tasks
