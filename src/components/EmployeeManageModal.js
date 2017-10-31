import React from 'react'
import Modal from './Modal'
import PropTypes from 'prop-types'
import EmployeeForm from './EmployeeForm'

const EmployeeManageModal = ({mode, handleClose, employee, onEmployeeAdd, onEmployeeEdit})=> {
  const handleSubmit = (...args)=> {
    handleClose();

    return mode === 'new' ? onEmployeeAdd(...args) : onEmployeeEdit(...args)
  };

  return (
    <div className="employee-manage-modal">
      <Modal mode={mode} handleClose={handleClose}>
        <h3>
          {
            mode === 'new' ? 'Добавить сотрудника' : 'Редактировать сотрудника'
          }
        </h3>

        <EmployeeForm mode={mode} handleSubmit={handleSubmit} {...employee} />
      </Modal>
    </div>
  );
};

EmployeeManageModal.propTypes = {
  onEmployeeAdd: PropTypes.func,
  onEmployeeEdit: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  employee: PropTypes.object
};

EmployeeManageModal.defaultProps = {
  onEmployeeAdd: f=>f,
  onEmployeeEdit: f=>f,
  employee: {},
  mode: 'new'
};

export default EmployeeManageModal;
