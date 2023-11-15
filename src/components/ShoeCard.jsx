
const ShoeCard = ({imgUrl, changeBigShoeImage, bigShowImage}) => {
    const handleClick = ()=>{
        if(bigShowImage !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2  rounded-xl ${bigShowImage === imgUrl.bigShoe ? 'border-coral-red': 'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="shoe thumbnail" width={127} height={103} className="object-contain"/>
        </div>
    </div>
  )
}

export default ShoeCard