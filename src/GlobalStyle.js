import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        overflow-x: hidden;
        padding:0.2rem;
        
        span {
		color: #23d997;
	}
    }

    body{
        background:#1b1b1b
        
    }

    button{
        font-weight:bold;
        font-size:1.1rem;
        cursor:pointer;
        padding: 1rem 2rem;
        border:3px solid #23d997;
        background:transparent;
        color:white;
        transition:all 0.5s ease;
        border-radius: 30px;
        &:hover{
            background-color:#23d997;
            color:white;
        }    
    }

    h2{
            font-weight:lighter;
            font-size:4rem;
           
           
    }
     h3{
            padding:3rem 0rem;
            color:#ccc;
            font-size:1.4rem;
		    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
		    font-size: 35px;
            text-decoration: underline;
            &:hover {
			color: #23d997;
            cursor:pointer;
		}
	
    }
    .AboutMe{
        p{
            font-family:"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
           
        }
    }
  
`;

export default GlobalStyle;
