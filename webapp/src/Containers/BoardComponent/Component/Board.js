import React from "react"

import moment from "moment"
import Dialog from "./../../DialogComponent"
import form from "./../../../Components/Form"
import Constants from "../../../Assay/Constants"

import "./Board.css"

const MAP_OPTIONS = (clickMap) => [
    {
        label: "View Buckets",
        className: "agile-tracker-button agile-tracker-button-type-transparent",
        onClick: () => clickMap["bucket"](),
    },
    {
        label: "Add a new task",
        className: "agile-tracker-button agile-tracker-button-type-success",
        onClick: () => clickMap["newTask"](),
    },
]

const FORM_BUCKET = [
    {
        key: "bucket-name",
        className: "col-12",
        label: "Name",
        type: "text",
        placeholder: "Name of the Bucket.",
        validation: (e) => form.required(e),
    },
    {
        key: "bucket-description",
        className: "col-12",
        label: "Description",
        type: "text",
        placeholder: "A short description.",
        validation: (e) => form.required(e),
    },
]

const FORM_TASK = (options) => [
    {
        key: "task-name",
        className: "col-12",
        label: "Name",
        type: "text",
        placeholder: "Name of the Task.",
        validation: (e) => form.required(e),
    },
    {
        key: "task-description",
        className: "col-12",
        label: "Description",
        type: "text",
        placeholder: "A short description.",
        validation: (e) => form.required(e),
    },
    {
        key: "task-bucket",
        className: "col-4",
        label: "Bucket",
        type: "select",
        placeholder: "Task Details.",
        validation: (e) => form.required(e),
        options: options.metaTaskBucket,
        default: "Select Bucket",
    },
    {
        key: "task-type",
        className: "col-4",
        label: "Type",
        type: "select",
        placeholder: "Task Details.",
        validation: (e) => form.required(e),
        options: options.metaTaskType,
        default: "Select Task",
    },
    {
        key: "task-status",
        className: "col-4",
        label: "Status",
        type: "select",
        placeholder: "Task Details.",
        validation: (e) => form.required(e),
        options: options.metaTaskStatus,
        default: "Select Status",
    },
    {
        key: "task-details",
        className: "col-12",
        label: "Detail",
        type: "textarea",
        placeholder: "Task Details.",
        validation: (e) => form.required(e),
    },
]

const STRING_CREATE_BUCKET = "Create a new Bucket"
const STRING_CREATE_TASK = "Create a new Bucket"
const STRING_ADD_BUCKET = "Add Bucket"
const STRING_ADD_TASK = "Create Task"
const STRING_UPDATE_TASK = "Update Task"
const STRING_DELETE_TASK = "Delete Task"

const STRING_CLOSE = "Close"
const STRING_SUBMIT = "Submit"

const STRING_DESCRIPTION = "Description"
const STRING_DETAIL = "Detail"

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boardDate: moment().format(Constants.DATE_FORMAT),

            isModalActiveCreateBucker: false,
            isModalActiveNewTask: false,

            showAddBucketOption: false,

            metaTaskType: [],
            metaTaskStatus: [],
            metaTaskBucket: [],

            showTaskOptions: {},
            expandTaskDetails: {},
        }
    }

    componentDidMount() {
        this.createMetaTask(Constants.MAP_TASK_TYPE, "metaTaskType")
        this.createMetaTask(Constants.MAP_TASK_STATUS, "metaTaskStatus")

        this.props.getTask()
        this.props.getBucket()
    }

    componentDidUpdate(oldProps) {
        if (this.props.bucket && this.props.bucket.length && oldProps.bucket !== this.props.bucket) {
            this.setState({ metaTaskBucket: this.props.bucket.map((element) => ({ value: element.bucket_id, label: element.bucket_name })) })
        }
    }

    createMetaTask(metaMap, stateValue) {
        this.setState({ [stateValue]: Object.keys(metaMap).map((element) => ({ value: metaMap[element], label: element })) })
    }

    mapForm(element, index) {
        return element.type === "text" ? (
            <form.TextInput
                index={index}
                className={element.className}
                key={element.key}
                label={element.label}
                placeholder={element.placeholder}
                value={this.state[element.key]}
                onChange={(value) => this.setState({ [element.key]: value, ["error-" + element.key]: element.validation(value) })}
                error={this.state["error-" + element.key]}
            />
        ) : element.type === "textarea" ? (
            <form.TextArea
                index={index}
                className={element.className}
                key={element.key}
                label={element.label}
                placeholder={element.placeholder}
                value={this.state[element.key]}
                onChange={(value) => this.setState({ [element.key]: value, ["error-" + element.key]: element.validation(value) })}
                error={this.state["error-" + element.key]}
            />
        ) : element.type === "select" ? (
            <form.Select
                index={index}
                className={element.className}
                key={element.key}
                label={element.label}
                value={this.state[element.key] || (element.options && element.options.length) ? element.options[0].value : null}
                onChange={(value) => {
                    this.setState({ [element.key]: value.target.value, ["error-" + element.key]: element.validation(value.target.value) })
                }}
                error={this.state["error-" + element.key]}
                options={element.options}
            />
        ) : null
    }

    renderDateSelection = () => (
        <div className="center agile-tracker-board-date-selection">
            <div className="agile-tracker-board-date-selection-content">
                <div className="agile-tracker-board-date-selection-date">{this.state.boardDate}</div>
            </div>
        </div>
    )

    renderOptions = () => (
        <div className="agile-tracker-board-option right">
            {MAP_OPTIONS({
                bucket: () => this.setState({ isModalActiveCreateBucker: true }),
                newTask: () => this.setState({ isModalActiveNewTask: true }),
            }).map((element, index) => (
                <button key={index} className={element.className} onClick={element.onClick}>
                    {element.label}
                </button>
            ))}
        </div>
    )

    renderTaskList = () => <div></div>

    addANewBucket = () => (
        <div>
            <div className="agile-tracker-bucket-body-add-new right">
                <button className={`agile-tracker-button agile-tracker-button-type-transparent`} onClick={() => this.setState({ showAddBucketOption: false })}>
                    {STRING_CLOSE}
                </button>
                <button
                    className={`agile-tracker-button agile-tracker-button-type-success`}
                    onClick={() => {
                        let status = false

                        FORM_BUCKET.forEach((element) => {
                            if (this.state[element.key] && !this.state["error-" + element.key]) status = true
                        })

                        if (status) {
                            this.props.postBucket({
                                bucket_name: this.state[FORM_BUCKET[0].key],
                                bucket_description: this.state[FORM_BUCKET[1].key],
                                create_time: moment().format(),
                                modified_time: moment().format(),
                                user_id: Constants.DEFAULT_USER_ID,
                            })
                        }
                    }}
                >
                    {STRING_SUBMIT}
                </button>
            </div>
            <div style={{ margin: "0px 8px" }}>
                <div className="agile-tracker-form">{FORM_BUCKET.map((element, index) => this.mapForm(element, index))}</div>
            </div>
        </div>
    )

    buttonAddNewBucket = () => (
        <div className="agile-tracker-bucket-body-add-new right">
            <button
                className={`agile-tracker-button ${
                    this.state.showAddBucketOption ? "agile-tracker-button-type-transparent" : "agile-tracker-button-type-success"
                }`}
                onClick={() => {
                    this.setState((pState) => ({ showAddBucketOption: !pState.showAddBucketOption }))
                }}
            >
                {this.state.showAddBucketOption ? STRING_CLOSE : STRING_ADD_BUCKET}
            </button>
        </div>
    )

    renderBucketModalBody = () => (
        <div className="agile-tracker-bucket-body">
            {this.state.showAddBucketOption ? this.addANewBucket() : this.buttonAddNewBucket()}
            <div className="agile-tracker-bucket-list">
                {this.props.bucket && this.props.bucket.length ? (
                    this.props.bucket.map((element, index) => (
                        <div key={index} className="agile-tracker-bucket-element" style={{ background: index % 2 === 0 ? "#F2F2F2" : "#FFFFFF" }}>
                            <div className="agile-tracker-bucket-card">
                                <div className="agile-tracker-bucket-name">{element.bucket_name}</div>
                                <div className="agile-tracker-bucket-description">{element.bucket_description}</div>
                                <div className="agile-tracker-bucket-foot right">{moment(element.create_time).format("llll")}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )

    handleTaskSubmit() {
        this.props.postTask({
            task_priority: 1,
            task_active_status: Number.parseInt(
                this.state["task-status"] || (this.state.metaTaskStatus && this.state.metaTaskStatus.length) ? this.state.metaTaskStatus[0].value : 1
            ),
            task_type: Number.parseInt(
                this.state["task-type"] || (this.state.metaTaskType && this.state.metaTaskType.length) ? this.state.metaTaskType[0].value : 1
            ),
            bucket_id: Number.parseInt(
                this.state["task-bucket"] || (this.state.metaTaskBucket && this.state.metaTaskBucket.length) ? this.state.metaTaskBucket[0].value : 1
            ),
            create_time: moment().format(),
            modified_time: moment().format(),
            user_id: Constants.DEFAULT_USER_ID,
            task_heading: this.state["task-name"],
            task_description: this.state["task-description"],
            task_details: this.state["task-details"],
            task_start_date: moment().format(),
            task_end_date: moment().format(),
        })
    }

    renderTaskModalBody = () => {
        const { metaTaskType, metaTaskStatus, metaTaskBucket, selectedTask } = this.state

        const mapOptions = {
            metaTaskType,
            metaTaskStatus,
            metaTaskBucket,
        }

        return (
            <div className="agile-tracker-task-body">
                <div className="agile-tracker-form">{FORM_TASK(mapOptions).map((element, index) => this.mapForm(element, index))}</div>

                <div className="agile-tracker-task-buttons center">
                    {selectedTask ? (
                        <div>
                            <button className="agile-tracker-button agile-tracker-button-type-transparent" onClick={() => this.handleTaskSubmit()}>
                                {STRING_DELETE_TASK}
                            </button>
                            <button className="agile-tracker-button agile-tracker-button-type-success" onClick={() => this.handleTaskSubmit()}>
                                {STRING_UPDATE_TASK}
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button className="agile-tracker-button agile-tracker-button-type-success" onClick={() => this.handleTaskSubmit()}>
                                {STRING_ADD_TASK}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    taskFoot = () => {
        function filtered(meta, value) {
            let possible = meta.filter((element) => element.value === value)[0]

            return possible ? possible.label : "N/A"
        }

        return [
            { label: <label>Created On</label>, key: "create_time", value: (e) => <span>{moment(e).format("l")}</span> },
            {
                label: <label>Status</label>,
                key: "task_active_status",
                value: (e) => <span>{filtered(this.state.metaTaskStatus, e)}</span>,
            },
            { label: <label>Type</label>, key: "task_type", value: (e) => <span>{filtered(this.state.metaTaskType, e)}</span> },
            {
                label: <label>Bucket</label>,
                key: "bucket_id",
                value: (e) => <span>{filtered(this.state.metaTaskBucket, e)}</span>,
            },
        ]
    }

    renderTasks = () => (
        <div className="agile-tracker-task-list center">
            {this.props.task && this.props.task.length
                ? this.props.task.map((element, index) => (
                      <div key={index} className="agile-tracker-task-list-element left">
                          <div
                              className="col-12 flex"
                              onMouseEnter={() => this.setState({ showTaskOptions: { ...this.state.showTaskOptions, [index]: true } })}
                              onMouseLeave={() => this.setState({ showTaskOptions: { ...this.state.showTaskOptions, [index]: false } })}
                          >
                              <div className="agile-tracker-task-list-element-head">{element.task_heading}</div>
                              {this.state.showTaskOptions[index] ? (
                                  <div className="agile-tracker-task-list-element-head-options">
                                      <i
                                          class="fa fa-pencil-square-o"
                                          onClick={() => this.setState({ isModalActiveNewTask: true, selectedTask: element })}
                                          aria-hidden="true"
                                      ></i>
                                      <i
                                          class="fa fa-expand"
                                          onClick={() =>
                                              this.setState({
                                                  expandTaskDetails: { ...this.state.expandTaskDetails, [index]: !this.state.expandTaskDetails[index] },
                                              })
                                          }
                                          aria-hidden="true"
                                      ></i>
                                  </div>
                              ) : null}
                          </div>
                          <div className="col-12">
                              <div className={`agile-tracker-task-list-element-description-root ${this.state.expandTaskDetails[index] ? "show" : "hide"} `}>
                                  <div>
                                      <div className="agile-tracker-task-list-element-description">
                                          <label>{STRING_DESCRIPTION}</label>
                                          <div>{element.task_description}</div>
                                      </div>
                                      <div className="agile-tracker-task-list-element-description">
                                          <label>{STRING_DETAIL}</label>
                                          <div>{element.task_details}</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12">
                              <div className="agile-tracker-task-list-element-foot right">
                                  {this.taskFoot().map((foot, i) => (
                                      <div key={i} className="agile-tracker-task-list-element-foot-content">
                                          {foot.label}
                                          {foot.value(element[foot.key])}
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    )

    render() {
        return (
            <div className="agile-tracker-board-component-root">
                <div className="col-12">{this.renderDateSelection()}</div>
                <div className="col-12">{this.renderOptions()}</div>
                <div className="col-12">{this.renderTasks()}</div>

                <Dialog
                    active={this.state.isModalActiveCreateBucker}
                    onClose={() => this.setState({ isModalActiveCreateBucker: false })}
                    onHide={() => this.setState({ isModalActiveCreateBucker: false })}
                    header={STRING_CREATE_BUCKET}
                    headerClass={"center"}
                    body={this.renderBucketModalBody()}
                />

                <Dialog
                    active={this.state.isModalActiveNewTask}
                    onClose={() => this.setState({ isModalActiveNewTask: false })}
                    onHide={() => this.setState({ isModalActiveNewTask: false })}
                    header={STRING_CREATE_TASK}
                    headerClass={"center"}
                    body={this.renderTaskModalBody()}
                />
            </div>
        )
    }
}

export default Board
