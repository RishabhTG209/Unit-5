import {CustomPaginationActionsTable} from "../Table/hometable";
import {SortFilter} from "../sortingFilter/sortingFilter";
 
export const Home=()=>{
    return(
        <div>
            <br/>
            <SortFilter/>
            <br/>
            <CustomPaginationActionsTable/>
        </div>
    )
}