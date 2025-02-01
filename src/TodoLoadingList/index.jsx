import './TodoLoadingList.css';

function TodoLoadingList (){
    return (
        <>
            <div className='skeleton-loading-todo'>
                <span className='skeleton-name'></span>
                <span className='skeleton-button'></span>
            </div>
        </>
    );
}

export { TodoLoadingList };
