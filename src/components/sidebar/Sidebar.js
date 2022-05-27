import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import signOutWithGoogle from "../Firebase";

const Sidebar = ({showSidebar, handleSidebar}) => {
  return (
    <>  <nav className={showSidebar ? " sidebar open": "sidebar" }
      onClick={() => handleSidebar(false)}
    >

      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

       <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

 <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>Watch Later</span>
      </li> 
<hr/>

      <li onClick={signOutWithGoogle}>
        <MdExitToApp   size={23} />
        <span>Sign Out</span>
         </li>

<hr/>
  </nav>
  </>

  )
}

export default Sidebar;
