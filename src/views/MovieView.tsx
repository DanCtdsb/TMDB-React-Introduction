import { Modal } from "@/components/Modal"
import { useNavigate } from "react-router-dom"

export const MovieView = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Modal onClose={() => navigate(-1)}>
                hi
            </Modal>
        </div>
    )
}