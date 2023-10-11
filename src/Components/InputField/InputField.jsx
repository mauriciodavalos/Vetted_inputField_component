import { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({ activeUser }) => {
  const [inputValue, setInputValue] = useState('');
  const [assignedUser, setAssignedUser] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const updateInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const assignUsertoConversation = () => {
    setAssignedUser(activeUser);
  };

  const submittingMessage = () => {
    if (inputValue.trim() === '') {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // hides after 3 seconds
      setInputValue('');
      return;
    }
    console.log('Input submitted:', inputValue);
    setInputValue('');
  };

  return (
    <div>
      {showNotification && (
        <div className=" bg-red-500 text-white p-4 rounded-lg m-4 shadow-lg">
          Message cannot be empty
        </div>
      )}
      <label className="relative block w-[648px]">
        {!assignedUser ? (
          <div className="relative">
            <img
              className="absolute left-2 top-3 w-[226px] h-[32px] cursor-pointer"
              src="/assets/unAssignIcon.svg"
              onClick={assignUsertoConversation}
            />
            <img
              className="absolute right-3 top-3 w-[32px] h-[32px] cursor-pointer"
              src="/assets/arrowSubmitIcon.svg"
            />
            <input
              value={inputValue}
              onChange={updateInputChange}
              className="placeholder: placeholder:text-slate-400 block bg-white w-full h-[56px]  border-slate-300 rounded-lg py-2 pl-3 pr-3 shadow-lg focus:outline-none focus:border-[#6B42EE] focus:ring-[#6B42EE] focus:ring-1 "
              placeholder="Replying as"
              type="text"
              name="Assign Conversation to User"
            />
          </div>
        ) : (
          <div className="relative">
            {inputValue === '' && (
              <div className="absolute top-3 left-24 bg-[#F6F6F4] text-black rounded-full w-auto h-[32px] flex justify-center">
                <img className="m-1 ml-2 opacity-40" src={activeUser.icon} />
                <span className="m-1 mr-2 font-bold text-[#000000] opacity-20">
                  {activeUser.name}
                </span>
              </div>
            )}
            <img
              className="absolute right-3 top-3 w-[32px] h-[32px] cursor-pointer"
              src="/assets/arrowSubmitIcon.svg"
              onClick={submittingMessage}
            />
            <input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  submittingMessage();
                }
              }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="placeholder: placeholder:text-[#000000] placeholder:opacity-20 block top-3 bg-white w-full h-[56px] border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-[#6B42EE] focus:ring-[#6B42EE] focus:ring-1 "
              placeholder="Replying as"
              type="text"
              name="Chat input field"
            />
          </div>
        )}
      </label>
    </div>
  );
};

InputField.propTypes = {
  activeUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default InputField;
