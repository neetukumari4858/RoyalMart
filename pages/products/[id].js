import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter
    const pageNumber = router.query.id;
    return (
        <>
            <Navbar/>
            <h1>{pageNumber}content</h1>
        </>
    )
}
export default pageNo;