const Button = ({ children, iconURL }) => {
  return (
    <button className='flex justify-center items-center rounded-full text-white gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red'>
      {children}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
