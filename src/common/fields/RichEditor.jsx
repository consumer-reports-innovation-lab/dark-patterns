import React from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'react-draft-wysiwyg'
import Label from './label'
// TODO: We might have to find a better way to include this
// Issue for tracking: https://github.com/ocupop/4p-common/issues/14
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const RichEditor = ({
  label, hint, onChange, className,
}) => {

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      <Editor
        editorClassName="border pl-3 form-control-lg"
        toolbarClassName="wysiwyg-toolbar-absolute"
        onEditorStateChange={onChange}
        stripPastedStyles
        placeholder="Write something here ..."
        // onContentStateChange={onChange}
        // onChange={onChange}
        toolbar={{
          options: ['inline', 'blockType'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
            bold: { className: 'bordered-option-classname' },
            italic: { className: 'bordered-option-classname' },
            underline: { className: 'bordered-option-classname' },
            strikethrough: { className: 'bordered-option-classname' },
          },
          blockType: {
            className: 'bordered-option-classname',
          },
        }}
      />
    </div>
  )
}

RichEditor.propTypes = {
  field: PropTypes.instanceOf(Object),
  label: PropTypes.string,
  hint: PropTypes.string,
  onChange: PropTypes.func,
}

export default RichEditor
