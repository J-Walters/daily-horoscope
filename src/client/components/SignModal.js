import { useState } from 'react';
import './SignModal.css';

const SignModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button onClick={toggleModal} className='btn-modal'>
        unsure about your sign?
      </button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h2>Select Your Birthdate</h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p> */}
            <label for='month'>month</label>
            <select name='month' id='month'>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
            </select>
            <label for='day'>day</label>
            <select name='day' id='day'>
              <option value='1'>1</option>
            </select>
            <button className='close-modal' onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignModal;
