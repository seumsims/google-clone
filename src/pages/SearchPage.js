import React from 'react'
import { useStateValue } from '../StateProvider'
// eslint-disable-next-line
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css'
import Response from './response'
import { Link } from 'react-router-dom';
import Search from './Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SearchPage() {
    // eslint-disable-next-line
    const [{ term }, dispatch] = useStateValue();
    //Live API Call
    //const { data } = useGoogleSearch(term);
    const data = Response
    console.log(data);

    return (

        // https://developers.google.com/custom-search/v1/overview

        // https://cse.google.com/cse/create/new

        

        <div className='searchPage'>
            <div className='searchPage__header'>
                {/* <h1>{term}</h1> */}
                <Link to="/">
                <img className="searchPage__logo"
                 src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google-logo"/>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons/>
                    <div className="serachPage__options">

                    <div className="serachPage__optionsLeft">

                    <div className="serachPage__option">

                        <SearchIcon />
                        <Link to="/all">ALL</Link>
                        
                    </div>

                    <div className="serachPage__option">

                        <DescriptionIcon />
                        <Link to="/news">New</Link>
                        
                    </div>

                    
                    <div className="serachPage__option">

                        <ImageIcon/>
                        <Link to="/images">Images</Link>
                        
                    </div>

                    
                    <div className="serachPage__option">

                        <LocalOfferIcon />
                        <Link to="/shopping">Shopping</Link>
                        
                    </div>

                    <div className="serachPage__option">

                        <RoomIcon/>
                        <Link to="/maps">Maps</Link>
                        
                    </div>

                    <div className="serachPage__option">

                        <MoreVertIcon />
                        <Link to="/more">More</Link>
                        
                    </div>

                    </div>

                    <div className="serachPage__optionsRight">

                    <div className="serachPage__option">
                        <Link to="/settings">Settings</Link>
                    </div>

                    <div className="serachPage__option">
                        <Link to="/tools">Tools</Link>
                    </div>

                    </div >

                    </div>

                </div>
            </div>
        
        {true && ( 
        
        <div className='searchPage__results'>
            <p  className='searchPage__resultCount'>
                About { data?.searchInformation.formattedTotalResults  }
               
                results  { data?.searchInformation.formattedSearchTime  } For Flowers
            </p>

        </div>

        )}

        
            
        </div>
    )
}

export default SearchPage
