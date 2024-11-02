import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

interface CardProp {
  name: string;
  attendance: string;
  department: string;
  profileImage: string;
  email: string;
}

export default function Card({ name, attendance, department, profileImage, email }: CardProp) {
  const [isBlocked, setIsBlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onBlockHandle = () => {
    setIsBlocked(!isBlocked);
    setShowModal(false);
  };

  const onDetailsHandle = () => {
    setShowModal(true);
  };

  return (
    <div className={`relative transition-all ${isBlocked ? 'opacity-50 bg-gray-300' : 'bg-[#EFEDF2]'}`}>
      <div className={`flex bg-opacity-80 shadow-lg rounded-2xl h-[300px] w-[440px] p-6 ${showModal ? 'blur-md' : ''}`}>
        <div>
          <img src={profileImage} className="w-16 h-16 rounded-full mb-4 mr-4" alt="profile" />
        </div>
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-500">{department}</p>

          <div className="my-4 flex gap-5">
            <p className="text-gray-400">Email</p> <p className="text-lg font-semibold">{email}</p>
          </div>

          <div className="flex justify-center mt-20">
            <Button onClick={onBlockHandle} text={isBlocked ? 'Unblock' : 'Block'} variant="transparent" />
            <Button onClick={onDetailsHandle} text="Details" variant="filled" disabled={isBlocked} />
          </div>
        </div>
      </div>

      
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col items-center">
            <img src={profileImage} className="w-24 h-24 rounded-full mb-4" alt="profile" />
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-500 mb-2">{department}</p>
            <p className="text-black-600">Attendance: {attendance}</p>
            <p className="text-black-600">Email: {email}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
