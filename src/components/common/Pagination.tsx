// Internal Dependencies
import ChevronLeftIcon from '../../assets/chevron-left.svg?react'
import ChevronRightIcon from '../../assets/chevron-right.svg?react'

type PaginationProps = {
    currentPage: number,
    totalPage: number
}

const Pagination = ({ currentPage, totalPage }: PaginationProps) => {
    return (
        <div className='flex flex-row items-center justify-end gap-4 p-6'>
            <ChevronLeftIcon />
            <div className='flex flex-row items-center gap-4'>
                <p className='text-darkGray text-sm'>Page</p>
                <div className='py-2 px-4 border border-lightestGray rounded-md'>
                    <p className='text-darkGreen text-sm'>{currentPage}</p>
                </div>
                <p className='text-darkGray text-sm'>of {totalPage}</p>
            </div>
            <ChevronRightIcon />
        </div>
    )
}

export default Pagination;