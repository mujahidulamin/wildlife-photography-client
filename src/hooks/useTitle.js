import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Wildlife Photography`;
    } ,[title])
};

export default useTitle;