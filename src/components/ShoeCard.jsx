const ShoeCard = ({ shoe, changeShoeImage, currentBigShoeImg }) => {
  const isSelected = currentBigShoeImg === shoe.bigShoe;

  function handleChangeImage() {
    if (currentBigShoeImg !== shoe.bigShoe) {
      changeShoeImage(shoe.bigShoe);
    }
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        isSelected ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleChangeImage}
    >
      <div className='flex justify-center rounded-xl items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4'>
        <img
          src={shoe.thumbnail}
          alt='shoe collection'
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
