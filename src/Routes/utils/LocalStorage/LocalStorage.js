import { toast } from "react-toastify";

const getStoredIds = () => {
    const storedIds = localStorage.getItem('order');
    if (storedIds) {
        return JSON.parse(storedIds)
    }
    return [];
}

const saveIds = id => {
    const storedIds = getStoredIds();
    const exist = storedIds.find(orderid=> orderid === id);
    if (!exist) {
        storedIds.push(id)
        localStorage.setItem('order', JSON.stringify(storedIds));
        toast.success("Added successfully")
    }
    else {
        toast.warn("Already Added")
    }
}

export { getStoredIds, saveIds }