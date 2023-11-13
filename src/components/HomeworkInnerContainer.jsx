import React, { useEffect } from 'react'
import HomeworkCard from './HomeworkCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMyHomeworks } from '../action/MainAction'

const HomeworkInnerContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyHomeworks())
    }, [dispatch])


    const { myHomeworks, loggedInUser, homeworks } = useSelector(state => state.Data)
    console.log(myHomeworks, loggedInUser, homeworks);
    return (
        <div className='homework_cards'>
            {
                loggedInUser?.is_staff ?
                    homeworks?.map((data, i) => {
                        return <HomeworkCard key={i} data={data} />
                    }) :
                    myHomeworks?.map((data, i) => {
                        return <HomeworkCard key={i} data={data} />
                    })
            }
            {/* <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard />
            <HomeworkCard /> */}
        </div>
    )
}

export default HomeworkInnerContainer