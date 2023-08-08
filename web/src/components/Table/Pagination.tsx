import React from 'react'

type Props = {
    Pages: Function
    callback: Function
}

export default function Pagination(props: Props) {
    const [currentPage, setCurrentPage] = React.useState(1)

    async function changePage(page: number) {
        setCurrentPage(page)
    }

    return (
        <nav
            aria-label="Table Paging"
            className="mb-0 text-muted"
            style={{cursor: 'pointer'}}>
            <ul className="pagination justify-content-center mb-0">
                <li
                    className="page-item"
                    onClick={() => {
                        changePage(currentPage - 1)
                    }}>
                    <button
                        disabled={currentPage == 1 ? true : false}
                        className="page-link">
                        Previous
                    </button>
                </li>
                {props.Pages().map((page: number, index: number) => (
                    <li
                        key={index}
                        onClick={() => {
                            changePage(page)
                        }}
                        className={`page-item ${
                            currentPage == page ? 'active' : ''
                        }`}>
                        <a className="page-link">{page}</a>
                    </li>
                ))}
                <li
                    className="page-item"
                    onClick={() => {
                        changePage(currentPage + 1)
                    }}>
                    <button
                        disabled={
                            currentPage == props.Pages().length ? true : false
                        }
                        className="page-link">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}
