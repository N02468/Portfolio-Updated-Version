
import styled from 'styled-components';
import banner from "../assets/images/item-3.jpg"

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  font-family: 'Comic-Neue', cursive;
  font-weight: bolder;
  color: #333;
  padding-right: 1rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const AnimatedImage = styled.img`
  max-width: 300px; /* Reduce size */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: bounceInLeft 1.5s ease-in-out;

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      transform: translateX(-200%);
    }
    60% {
      opacity: 1;
      transform: translateX(30%);
    }
    80% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 2rem; /* Increased spacing between buttons */

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &.doc {
      background-color: #007bff;
      color: white;
    }

    &.git {
      background-color: #333;
      color: white;
    }

    &:hover {
      opacity: 0.9;
    }

    i {
      font-size: 1.2rem;
    }
  }
`;
const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <h1 style={{paddingTop:"5rem"}}>Welcome to My Portfolio</h1>
        <p style={{color:"white","textAlign":'justify'}}>
          Hello! I'm a passionate developer dedicated to creating amazing web
          experiences. Explore my projects, learn more about me, and feel free
          to reach out if you'd like to collaborate!
        </p>
        
        <button className="doc" style={{"marginRight":"1rem","font-weight":"bolder"}}>
              Hire Me Now <i className="ri-arrow-right-line" ></i>
            </button>

            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <button className="git" style={{"font-weight":"bolder"}}>
                <i className="ri-github-fill"></i> My Github
              </button>
            </a>
            <div class="whatsapp-container">
            <a href="https://wa.me/923407386534" target="_blank" class="whatsapp-rounded-button">
              <i class="ri-whatsapp-fill"></i>
            </a>
          </div>
         
          

      </Content>
      <AnimatedImage src={banner} alt="Profile" style={{paddingTop:"5rem"}}/>
    </HomeContainer>
  
    
  );
};

export default Home;
