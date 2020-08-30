import React from "react"

import moment from "moment"

import "./Board.css"
import Constants from "../../../Assay/Constants"

const MAP_OPTIONS = [
  {
    label: 'Create Bucket',
    className: 'agile-tracker-button agile-tracker-button-type-transparent'
  },
  {
    label: 'Add a new task',
    className: 'agile-tracker-button agile-tracker-button-type-success'
  }
]

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boardDate: moment().format(Constants.DATE_FORMAT),
        }
    }

    renderDateSelection = () => (
        <div className="center agile-tracker-board-date-selection">
            <div className="agile-tracker-board-date-selection-content">
                <div className="agile-tracker-board-date-selection-date">{this.state.boardDate}</div>
                {/* <div className="agile-tracker-board-date-selection-new-task">
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </div> */}
            </div>
        </div>
    )

    renderOptions = () => (
        <div className="agile-tracker-board-option right">
          {MAP_OPTIONS.map((element, index) => <button key={index} className={element.className}>{element.label}</button>)}
        </div>
    )

    renderTaskList = () => (
      <div></div>
    )

    render() {
        return (
            <div className="agile-tracker-board-component-root">
                <div className="col-12">{this.renderDateSelection()}</div>
                <div className="col-12">{this.renderOptions()}</div>
            </div>
        )
    }
}

export default Board
