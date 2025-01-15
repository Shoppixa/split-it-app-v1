import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from '../../../utils/Axios'
import SummaryApi from '../../../common/SummaryApi'
import Loader from '../loader'

function FriendSearch() {
    const location = useLocation()
    const [results, setResults] = useState([])

    // Extract query from URL
    const queryParams = new URLSearchParams(location.search)
    const searchQuery = queryParams.get('fs') //fs stands for friend search

    const fetchSearchResults = async () => {
        try {
            const response = await Axios({ ...SummaryApi.friendSearch })
            setResults(response.data.data.user_list)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (searchQuery) {
            fetchSearchResults()
        }
    }, [searchQuery])

    return (
        <div>
            <h6 className="p-2 my-3 shadow text-center fw-bolder">
                <Link to="/groups" className="text-decoration-none text-dark">
                    Search Results for : {searchQuery}
                </Link>
            </h6>

            <div className="list-group shadow-5-strong my-2">
                {results && results.length > 0 ? (
                    results.map((friend) => (
                        <div
                            key={friend.id}
                            className="list-group-item border-0 d-flex justify-content-between align-items-center shadow mb-2">
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                                    alt=""
                                    style={{ width: '45px', height: '45px' }}
                                    className="rounded-circle ms-0"
                                />
                                <div className="ms-3">
                                    <Link
                                        to={`/friend/${friend.id}`}
                                        className="mb-1 text-decoration-none text-dark">
                                        {friend.fname + ' ' + friend.lname}
                                    </Link>
                                </div>
                            </div>

                            <Link to={`/friend/${friend.id}`} className="text-decoration-none">
                                View
                            </Link>
                        </div>
                    ))
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    )
}

export default FriendSearch
