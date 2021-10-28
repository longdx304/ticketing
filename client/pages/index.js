const LandingPage = ({ currentUser }) => {
  return <h1>{currentUser ? 'You are signed in' : 'You are NOT signed in'}</h1>;
};

export default LandingPage;
