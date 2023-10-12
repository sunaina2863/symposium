import { React } from "react";
import team from "./team.svg";
import member1 from "./Member Images/Shivansh_Convenor.jpeg"
import member2 from "./Member Images/Lovish_co-convener.jpg"
import member3 from "./Member Images/Rajat Gupta_CTM.jpg"
import member4 from "./Member Images/Ayushi Thakur_CTM.jpg"
import member5 from "./Member Images/Sakshi_CTM_Publicity_Marketing.jpg"
import member6 from "./Member Images/Sunaina_Das_Tech_CoCTM.jpg"
import member7 from "./Member Images/Biswarup_Co-CTM_Publicity _ Marketing.jpg"
import member8 from "./Member Images/DEBARGHYA_GHOSH_CTM_LOGISTICS.jpg"
import member9 from "./Member Images/Naman Singh_co-CTM_Logistics.jpg"
import member10 from "./Member Images/Manoj_Tech_coordi.jpeg"
import member11 from "./Member Images/Mukul_Co-ordinator.jpg"
import member12 from "./Member Images/Aiswarya Coordinator_.jpg"
import member13 from "./Member Images/Shweta Rani Keshri_Abstract Review Committee Coordinator.JPG"
import member14 from "./Member Images/Ajaykumar Udayraj Yadav_ Coordinator_AbstractReviewTeam.jpg"
import member15 from "./Member Images/Ashutosh _Coordinator.jpg"
import member16 from "./Member Images/Avneesh coordinator_.jpg"
import member17 from "./Member Images/Chirag Swaminarayan_Coordinator_Event .jpeg"
import member18 from "./Member Images/Dhiraj Kumar Rana Coordinator_.jpg"
import member19 from "./Member Images/Hemant_gupta_Coordinator(Publicity_marketing).jpg"
import member20 from "./Member Images/Kelvin Gajera -Coordinator- Events team.jpg"
import member21 from "./Member Images/Nitin_Kumar_TechCoordinator.jpg"
import member22 from "./Member Images/Om Priyanshu_Co-ordinator_Logistics.jpg"
import member23 from "./Member Images/PARTH BIDALIYA _ Coordinator_Event.jpg"
import member24 from "./Member Images/Piyush_Paul_Coordinator_Publicity___Marketing_Team.jpg"
import member25 from "./Member Images/Pratip Sankar Banerjee_Coordinator.jpeg"
import member26 from "./Member Images/Shankha_Co-ordinator.jpg"
import member27 from "./Member Images/Shravan Kumar Pathak _Coordinator _Events_.jpg"
import member28 from "./Member Images/Soumili Chakraborti_Coordinator_.jpg"
import member29 from "./Member Images/Yash Prakash Mishra_Co-ordinator_Abstract Review Committee.jpg"
import member30 from "./Member Images/Yuvraj_TechCoordinator.jpg"
import member31 from "./Member Images/shivansh_Tech_coordi.JPG"
import member32 from "./Member Images/Divyansh_tech_coordi.jpeg"
import member33 from './Member Images/lnr.jpg'
import member34 from './Member Images/leena.jpg'
import member35 from './Member Images/sangeeta.jpg'
import member36 from './Member Images/bijay.jpg'
import "./team.css";

function Team() {
  return (
    <>
      <div className="team-txt">
        <img src={team} className="team-img" />
      </div>

      <div className="team-container-boss" id="team">

      <div className="member-1 flex-item">
          <img src={member33} className="member-img" />
          <div className="name">
            <h1>Professor</h1>
            <h2 className='lnr'>LAKSHMI NARAYAN RAMASUBRAMANIAN</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member34} className="member-img" />
          <div className="name">
            <h1>Professor</h1>
            <h2>LEENA NEBHANI</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member35} className="member-img" />
          <div className="name">
            <h1>Professor</h1>
            <h2>SANGEETA SANTRA</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member36} className="member-img" />
          <div className="name">
            <h1>Professor</h1>
            <h2>BIJAY P TRIPATHI</h2>
          </div>
        </div>
        <div className="member-1 flex-item">
          <img src={member1} className="member-img" />
          <div className="name">
            <h1>Convener</h1>
            <h2>Shivansh</h2>
          </div>
        </div>



        <div className="member-2 flex-item">
          <div className="img">
            <img src={member2} className="member-img" />
          </div>
          <div className="name">
            <h1>Co-Convener</h1>
            <h2>Lovish</h2>
          </div>
        </div>

        <div className="member-3 flex-item">
          <div className="img">
            <img src={member3} className="member-img" />
          </div>
          <div className="name">
            <h1>CTM Technical</h1>
            <h2>Rajat Gupta</h2>
          </div>
        </div>

        <div className="member-4 flex-item">
          <div className="img">
            <img src={member4} className="member-img" />
          </div>
          <div className="name">
            <h1>CTM</h1>
            <h2>Ayushi Thakur</h2>
          </div>
        </div>

        <div className="member-5 flex-item">
          <div className="img">
            <img src={member5} className="member-img" />
          </div>
          <div className="name">
            <h1>CTM Publicity</h1>
            <h2>Sakshi</h2>
          </div>
        </div>

        <div className="member-6 flex-item">
          <div className="img">
            <img src={member6} className="member-img" />
          </div>
          <div className="name">
            <h1>Co-CTM Technical</h1>
            <h2>Sunaina Das</h2>
          </div>
        </div>

        <div className="member-7 flex-item">
          <div className="img">
            <img src={member7} className="member-img" />
          </div>
          <div className="name">
            <h1>Co-CTM Publicity</h1>
            <h2>Biswarup</h2>
          </div>
        </div>

        <div className="member-8 flex-item">
          <div className="img">
            <img src={member8} className="member-img" />
          </div>
          <div className="name">
            <h1>CTM Logistics</h1>
            <h2>Debarghya Ghosh </h2>
          </div>
        </div>

        <div className="member-9 flex-item">
          <div className="img">
            <img src={member9} className="member-img" />
          </div>
          <div className="name">
            <h1>Co-CTM Logistics</h1>
            <h2>Naman Singh</h2>
          </div>
        </div>

        <div className="member-10 flex-item">
          <div className="img">
            <img src={member10} className="member-img" />
          </div>
          <div className="name">
            <h1>Technical Coordinator</h1>
            <h2>Manoj </h2>
          </div>
        </div>

        <div className="member-11 flex-item">
          <div className="img">
            <img src={member11} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator</h1>
            <h2>Mukul</h2>
          </div>
        </div>

        <div className="member-12 flex-item">
          <div className="img">
            <img src={member12} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Aiswarya</h2>
          </div>
        </div>

        <div className="member-13 flex-item">
          <div className="img">
            <img src={member13} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Shweta Rani Keshri</h2>
          </div>
        </div>

        <div className="member-14 flex-item">
          <div className="img">
            <img src={member14} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Ajaykumar yadav</h2>
          </div>
        </div>

        <div className="member-15 flex-item">
          <div className="img">
            <img src={member15} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Ashutosh</h2>
          </div>
        </div>

        <div className="member-16 flex-item">
          <div className="img">
            <img src={member16} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Avneesh</h2>
          </div>
        </div>

        <div className="member-17 flex-item">
          <div className="img">
            <img src={member17} className="member-img" />
          </div>
          <div className="name">
            <h1>Event Coordinator </h1>
            <h2>Chirag Swaminarayan</h2>
          </div>
        </div>

        <div className="member-18 flex-item">
          <div className="img">
            <img src={member18} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Dhiraj Kumar Rana</h2>
          </div>
        </div>

        <div className="member-19 flex-item">
          <div className="img">
            <img src={member19} className="member-img" />
          </div>
          <div className="name">
            <h1>Marketing Coordinator </h1>
            <h2>Hemant gupta</h2>
          </div>
        </div>

        <div className="member-20 flex-item">
          <div className="img">
            <img src={member20} className="member-img" />
          </div>
          <div className="name">
            <h1>Event Coordinator </h1>
            <h2>Kelvin Gajera</h2>
          </div>
        </div>

        <div className="member-21 flex-item">
          <div className="img">
            <img src={member21} className="member-img" />
          </div>
          <div className="name">
            <h1>Technical Coordinator </h1>
            <h2>Nitin Kumar</h2>
          </div>
        </div>

        <div className="member-22 flex-item">
          <div className="img">
            <img src={member22} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Om Priyanshu</h2>
          </div>
        </div>

        <div className="member-23 flex-item">
          <div className="img">
            <img src={member23} className="member-img" />
          </div>
          <div className="name">
            <h1>Event Coordinator</h1>
            <h2>Parth Bidaliya</h2>
          </div>
        </div>

        <div className="member-24 flex-item">
          <div className="img">
            <img src={member24} className="member-img" />
          </div>
          <div className="name">
            <h1>Marketing Coordinator</h1>
            <h2>Piyush Paul</h2>
          </div>
        </div>

        <div className="member-25 flex-item">
          <div className="img">
            <img src={member25} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Pratip Sankar Banerjee</h2>
          </div>
        </div>

        <div className="member-26 flex-item">
          <div className="img">
            <img src={member26} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Shankha</h2>
          </div>
        </div>

        <div className="member-27 flex-item">
          <div className="img">
            <img src={member27} className="member-img" />
          </div>
          <div className="name">
            <h1>Event Coordinator </h1>
            <h2>Shravan Pathak</h2>
          </div>
        </div>

        <div className="member-28 flex-item">
          <div className="img">
            <img src={member28} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Soumili Chakraborti</h2>
          </div>
        </div>

        <div className="member-29 flex-item">
          <div className="img">
            <img src={member29} className="member-img" />
          </div>
          <div className="name">
            <h1>Coordinator </h1>
            <h2>Yash Prakash Mishra</h2>
          </div>
        </div>

        <div className="member-30 flex-item">
          <div className="img">
            <img src={member30} className="member-img" />
          </div>
          <div className="name">
            <h1>Technical Coordinator </h1>
            <h2>Yuvraj</h2>
          </div>
        </div>


        <div className="member-31 flex-item">
          <div className="img">
            <img src={member31} className="member-img" />
          </div>
          <div className="name">
            <h1>Technical Coordinator </h1>
            <h2>Shivansh Gupta</h2>
          </div>
        </div>

        <div className="member-32 flex-item">
          <div className="img">
            <img src={member32} className="member-img" />
          </div>
          <div className="name">
            <h1>Technical Coordinator </h1>
            <h2>Divyansh</h2>
          </div>
        </div>
      </div>

    </>
  );
}
export default Team;
