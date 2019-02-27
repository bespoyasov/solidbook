import styled from 'styled-components'

export default styled.body`
  @font-face {
    font-family: SF UI Text;
    src: url(./Fonts/SFUIText-Regular.eot);
    src: local('SF UI Text Regular'), local('SFUIText-Regular'),
      url(./Fonts/SFUIText-Regular.eot?#iefix) format('embedded-opentype'),
      url(./Fonts/SFUIText-Regular.woff) format('woff'), url(./Fonts/SFUIText-Regular.ttf) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: SF UI Text;
    src: url(./Fonts/SFUIText-Bold.eot);
    src: local('SF UI Text Bold'), local('SFUIText-Bold'),
      url(./Fonts/SFUIText-Bold.eot?#iefix) format('embedded-opentype'), url(./Fonts/SFUIText-Bold.woff) format('woff'),
      url(./Fonts/SFUIText-Bold.ttf) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`
