import {CustomPaginationActionsTable} from "../Table/hometable";
import {SortFilter} from "../sortingFilter/sortingFilter";
 
export const Home=()=>{
    return(
        <div>
            <br/>
            <br/>
            <SortFilter/>
            <br/>
            <br/>
            <br/>
            <CustomPaginationActionsTable/>
        </div>
    )
}