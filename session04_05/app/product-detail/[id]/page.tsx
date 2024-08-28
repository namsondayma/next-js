
const NumberPage = (props: any) =>{
    const {params} = props;
    return (
        <div> Bai4 <br />
            product id:{params?.id}
        </div>
    )
}
export default NumberPage;