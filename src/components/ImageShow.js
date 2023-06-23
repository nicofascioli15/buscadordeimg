
const ImageShow =({image}) => {
    return (
        <div className="img">
            <img src={image.urls.small} />
        </div>
    )
}

export default ImageShow