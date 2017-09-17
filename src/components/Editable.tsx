import autobind from 'autobind-decorator';
import React from 'react';

interface EditableInterface {
  editing?: boolean;
  value?: string;
  onEdit?: (value: string) => void;
}

const Editable: React.SFC<EditableInterface> = ({
  editing,
  value,
  onEdit = () => undefined,
  ...props,
}) => {
  if (editing) {
    return <Edit value={value} onEdit={onEdit} {...props} />;
  }
  return <span {...props}>{value}</span>;
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
    const { value, onEdit, ...props } = this.props;
    return (
      <input
        autoFocus={true}
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
