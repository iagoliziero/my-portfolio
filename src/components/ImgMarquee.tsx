interface ImgMarque {
    nameImg: string,
}

const ImgMarque = ({nameImg}: ImgMarque): JSX.Element => {
  return (
    <img height="64" width="64" src={`https://cdn.simpleicons.org/${nameImg}/ffffffb3`} alt="Logo" />
  );
};

export default ImgMarque;
