import React from "react"

import "./index.css"

// VALIDATION

var required = function required(value) {
    return value ? undefined : "Field Is Required"
}

// FORM
const TextInput = ({index, className, key, label, placeholder, value, onChange, error}) => (
    <div className={className} key={index}>
        <div className="agile-tracker-form-group">
            <label className="agile-tracker-form-label">{label}</label>
            <div>
                <input
                    name={key}
                    className={`agile-tracker-form-input ${error ? "agile-tracker-form-input-error" : ""}`}
                    id={key}
                    placeholder={placeholder}
                    type="text"
                    value={value || ""}
                    autoComplete="disabled"
                    onChange={(e) => onChange(e.target.value)}
                />
                <span className="agile-tracker-form-error col-xs-12 padding-0">{error}</span>
            </div>
        </div>
    </div>
)

const TextArea = ({index, className, key, label, placeholder, value, onChange, error}) => (
    <div className={className} key={index}>
        <div className="agile-tracker-form-group">
            <label className="agile-tracker-form-label">{label}</label>
            <div>
                <textarea
                    name={key}
                    className={`agile-tracker-form-input ${error ? "agile-tracker-form-input-error" : ""}`}
                    id={key}
                    placeholder={placeholder}
                    type="text"
                    value={value || ""}
                    autoComplete="disabled"
                    onChange={(e) => onChange(e.target.value)}
                />
                <span className="agile-tracker-form-error col-xs-12 padding-0">{error}</span>
            </div>
        </div>
    </div>
)

const Select = ({index, className, key, label, value, onChange, error, options}) => (
    <div className={className} key={index}>
        <div className="agile-tracker-form-group">
            <label className="agile-tracker-form-label">{label}</label>
            <div>
                <select
                    className={`agile-tracker-form-input ${error ? "agile-tracker-form-input-error" : ""}`}
                    name={key}
                    id={key}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((element) =>
                        element.meta && element.meta.length ? (
                            <optgroup className={element.className} label={element.label}>
                                {element.meta.map((element) => (
                                    <option className="agile-tracker-form-input-select-option" value={element.value}>
                                        {element.label}
                                    </option>
                                ))}
                            </optgroup>
                        ) : (
                            <option className="agile-tracker-form-input-select-option" value={element.value}>
                                {element.label}
                            </option>
                        )
                    )}
                </select>
                <span className="agile-tracker-form-error col-xs-12 padding-0">{error}</span>
            </div>
        </div>
    </div>
)

export default {
    required,

    TextInput,
    TextArea,
    Select
}
