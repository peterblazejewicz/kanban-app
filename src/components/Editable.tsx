import autobind from 'autobind-decorator';
import classnames from 'classnames';
import React from 'react';

interface EditableInterface {
  className?: string;
  editing?: boolean;
  value?: string;
  onEdit?: (value: string) => void;
}

const Editable: React.SFC<EditableInterface> = ({
  className,
  editing,
  value,
  onEdit = () => undefined,
  ...props,
}) => {
  if (editing) {
    return (
      <Edit className={className} value={value} onEdit={onEdit} {...props} />
    );
  }
  return (
    <span className={classnames('value', className)} {...props}>
      {value}
    </span>
  );
};

class Edit extends React.Component<EditableInterface, {}> {
  @autobind
  checkEnter(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      this.finishEdit(event);
    }
  }
  @autobind
  finishEdit(event: React.FormEvent<HTMLInputElement>): void {
    const value = (event.target as HTMLInputElement).value;
    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  }

  render() {
    const { className, onEdit, value, ...props } = this.props;
    return (
      <input
        autoFocus={true}
        className={classnames('edit', className)}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        type="text"
        {...props}
      />
    );
  }
}

export default Editable;
