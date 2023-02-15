import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className="m-2">
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className="m-2">
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link className="m-2">
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='myBlue' variant='dark' expand='md' collapseOnSelect>
		<Navbar.Brand className="m-2">
			<a>
			<svg id="logo-22" width="103" height="52" viewBox="0 0 103 52" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.03122 11.1781C7.39592 9.5635 7.67172 7.707 8.25692 6.1456C8.87262 4.5026 9.94472 2.8641 11.5471 2C11.6266 3.7314 11.0977 5.442 10.5198 6.9845C10.0001 8.3719 9.36242 9.85 8.30942 10.9974C8.14762 11.8668 8.02362 12.7338 7.93642 13.5968C8.28542 12.6851 8.85132 11.8541 9.55742 11.1859C10.4665 10.3255 11.8188 9.6616 13.0882 10.0542C12.7164 11.4574 11.8689 12.8025 10.8652 13.7461C10.0752 14.4888 9.03232 15.4405 7.80392 15.4779C7.75332 16.7479 7.78192 18.0063 7.88642 19.2476C8.05972 18.3392 8.43102 17.4838 8.96752 16.8468C9.70452 15.9715 10.7973 14.9021 12.1929 15.081C12.1167 16.5012 11.5502 17.9563 10.7613 19.0497C10.1344 19.9186 9.30682 21.026 8.13212 21.3121C8.32022 22.5318 8.58222 23.7313 8.91462 24.905C8.91782 24.0063 9.11632 23.1242 9.51012 22.4167C10.0651 21.419 10.9295 20.1748 12.3267 20.0775C12.5315 21.4708 12.254 22.9939 11.6942 24.2053C11.2468 25.1736 10.6503 26.4084 9.56302 26.9193C10.0196 28.1821 10.5599 29.4096 11.1794 30.5944C10.9619 29.5732 10.9706 28.4971 11.228 27.5289C11.5827 26.1941 12.4632 24.792 13.8768 24.3851C14.3765 25.8587 14.3076 27.5033 14.0173 29.0011C13.7784 30.2343 13.309 31.6827 12.2568 32.4838C12.9447 33.5939 13.7057 34.6593 14.5356 35.673C14.0897 34.6788 13.8681 33.5915 13.987 32.596C14.1602 31.1458 14.5677 29.5944 16.049 28.8212C16.8894 30.2712 17.0841 31.8979 17.1555 33.5046C17.2132 34.8035 17.0261 36.4056 16.124 37.4623C17.1163 38.494 18.187 39.4596 19.3306 40.35C18.5923 39.4029 18.0753 38.2915 17.9658 37.1924C17.8112 35.6395 17.8868 33.93 19.2649 32.7904C20.4435 34.0214 21.1468 35.8343 21.4915 37.4089C21.7963 38.8011 22.1145 40.4489 21.3888 41.819C22.8442 42.769 24.3979 43.606 26.0406 44.3148C24.8847 43.4911 23.9385 42.361 23.4877 41.1942C22.897 39.6647 22.5316 37.8422 23.6823 36.3104C25.224 37.2979 26.3571 38.9827 27.2498 40.5193C28.0158 41.8378 28.8087 43.6576 28.4153 45.2279C29.3248 45.5365 30.2578 45.8075 31.2131 46.0387L31.1563 46.2732C30.1974 46.0411 29.2608 45.7692 28.3476 45.4597C27.7078 47.3504 25.6119 47.975 23.9169 48.2508C21.5018 48.6437 18.6261 47.8824 16.5643 46.3488C17.6525 44.8109 19.8728 44.6549 21.547 44.5372L21.5688 44.5357C23.4029 44.4068 25.3866 44.579 27.231 45.0582C25.1003 44.2471 23.1066 43.2273 21.2682 42.0284L21.2411 42.0712C20.2337 43.7047 18.2111 43.7684 16.6235 43.6651C14.4692 43.5249 11.982 42.215 10.5425 40.4043C11.8965 39.2163 13.8964 39.5488 15.446 39.8064L15.4535 39.8076C17.183 40.0951 19.0729 40.7223 20.6593 41.688C20.5082 41.569 20.3603 41.4431 20.2166 41.3111C18.6742 40.2114 17.2514 38.9813 15.9603 37.6401C15.9453 37.6551 15.9301 37.67 15.9148 37.6848C14.6594 38.9477 12.831 38.617 11.4041 38.206C9.49462 37.656 7.51432 35.9967 6.56532 34.0918C8.03592 33.2678 9.79412 33.9468 11.1617 34.4839C12.6627 35.0734 14.2508 36.0164 15.4719 37.2185C15.346 37.0597 15.2259 36.8938 15.1124 36.7221C13.9774 35.4411 12.9564 34.0694 12.0588 32.6223L12.0138 32.6505C10.5936 33.567 8.98452 32.9033 7.70922 32.2506C5.98012 31.3657 4.59062 29.4209 3.99022 27.5083C5.52412 27.017 7.03962 27.9813 8.21772 28.745C9.50622 29.5802 10.8114 30.7714 11.7073 32.1375C11.6415 32.0029 11.5802 31.8653 11.5237 31.7251C10.6629 30.2233 9.93162 28.6467 9.33962 27.0112L9.30912 27.0216L9.30662 27.0225C8.01532 27.5134 6.57732 26.7502 5.63982 25.9132C4.33682 24.75 3.41842 22.9617 3.20312 21.2146C4.54942 21.0402 5.81782 22.0818 6.68502 22.9702C7.68322 23.9927 8.57912 25.2012 9.12992 26.5435C9.08972 26.3977 9.05522 26.2496 9.02622 26.1C8.52502 24.5631 8.14532 22.9781 7.89502 21.3577L7.87552 21.3601L7.86892 21.3612C6.50372 21.5891 5.24152 20.5512 4.48742 19.5439C3.42942 18.1304 2.88402 16.1741 3.02072 14.401C4.38062 14.4961 5.41612 15.7898 6.08762 16.8363C6.86482 18.0478 7.50932 19.4189 7.79162 20.8533C7.78302 20.7392 7.77792 20.6244 7.77612 20.5093C7.56882 18.8601 7.49492 17.1771 7.56252 15.4733L7.55862 15.4731C6.17062 15.4231 5.14482 14.1344 4.61522 12.9913C3.85742 11.3555 3.73542 9.2878 4.24122 7.5452C5.56412 7.9165 6.30162 9.434 6.73692 10.6021C7.23882 11.9489 7.58912 13.4178 7.59192 14.8782C7.66412 13.653 7.80952 12.4181 8.03122 11.1781Z" class="ccustom" fill="#394149"></path> <path d="M35.3684 8.1554V14.0052C35.3684 16.5781 33.0382 17.816 29.5065 17.816C26.2054 17.816 23.8388 16.5903 23.8388 13.7018V8.1554H27.1278V13.7018C27.1278 14.7334 28.0137 15.3766 29.64 15.3766C31.1935 15.3766 32.1159 14.7091 32.1159 13.7139V8.1554H35.3684Z" class="ccustom" fill="#394149"></path> <path d="M46.3223 15.146V17.6825H37.2321V8.1554H40.5211V15.146H46.3223Z" class="ccustom" fill="#394149"></path> <path d="M56.0968 10.5463V8.1554H44.7249V10.5463H48.7421V17.6825H52.0675V10.5463H56.0968Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M67.763 9.1264C68.2 9.5754 68.407 10.1944 68.407 11.056C68.407 11.7964 68.225 12.4275 67.921 12.8522C67.581 13.3134 67.059 13.7018 66.416 13.7989L69.293 17.6825H65.676L63.309 14.3207H60.3602V17.6825H57.1197V8.1554H64.705C66.21 8.1554 67.193 8.5195 67.763 9.1264ZM65.142 11.8571C65.227 11.7114 65.251 11.5172 65.251 11.3595C65.251 11.1774 65.227 10.9832 65.142 10.8619C64.972 10.5463 64.632 10.4614 64.122 10.4614H60.3723V12.1969H64.183C64.705 12.1969 65.021 12.0998 65.142 11.8571Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M73.671 15.9228H78.817L79.654 17.6825H83.162L78.356 8.1554H74.436L69.351 17.6825H72.785L73.671 15.9228ZM77.785 13.7867H74.739L75.941 11.493L76.305 10.6191L76.645 11.4808L77.785 13.7867Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M67.416 19.4768C65.38 19.4768 64.309 20.4418 64.309 21.8598C64.309 23.4603 65.433 24.2722 67.416 24.2722C69.599 24.2722 70.517 23.3308 70.517 21.8598C70.517 20.3653 69.481 19.4768 67.416 19.4768ZM67.416 23.0896C66.257 23.0896 65.921 22.613 65.921 21.8775C65.921 21.1538 66.286 20.6772 67.41 20.6772C68.64 20.6772 68.916 21.2126 68.916 21.8775C68.916 22.5836 68.581 23.0896 67.416 23.0896Z" class="ccustom" fill="#394149"></path> <path d="M61.2913 24.2016V21.4656H58.2199V22.46H59.8615C59.8498 22.5365 59.7909 22.6836 59.7144 22.7718C59.5438 22.9719 59.0907 23.1484 58.5023 23.1484C57.8904 23.1484 57.4962 22.9895 57.2844 22.7424C57.1432 22.56 57.0608 22.3011 57.0608 21.9128C57.0608 21.5068 57.1432 21.2303 57.302 21.0479C57.5315 20.789 57.9198 20.6772 58.4906 20.6772C59.0025 20.6772 59.3555 20.7948 59.5203 20.9419C59.6262 21.0302 59.7085 21.1538 59.7262 21.2361H61.2501C61.2443 21.089 61.1972 20.8537 61.1148 20.6831C60.75 19.9417 59.9027 19.5004 58.4612 19.5004C57.2079 19.5004 56.3665 19.8828 55.9017 20.4595C55.5957 20.8537 55.4545 21.3479 55.4545 21.901C55.4545 22.513 55.6192 23.0366 55.8899 23.3838C56.3488 23.9781 57.1667 24.2722 58.1493 24.2722C59.0143 24.2722 59.6085 24.0663 59.9851 23.7545L60.0263 24.2016H61.2913Z" class="ccustom" fill="#394149"></path> <path d="M45.2632 21.4068C46.4576 21.5362 46.9695 21.9599 46.9695 22.766C46.9695 23.7427 46.0163 24.2722 44.1393 24.2722C42.3918 24.2722 41.6387 23.778 41.3503 23.1308C41.2856 22.9778 41.2562 22.7895 41.2385 22.6718H42.9331C42.9449 22.7424 42.9861 22.8483 43.0449 22.9189C43.1861 23.0896 43.5803 23.1896 44.2511 23.1896C45.1161 23.1896 45.322 23.066 45.322 22.8366C45.322 22.5894 45.1102 22.5365 44.3276 22.4541C44.0158 22.4247 43.5215 22.3776 43.3156 22.36C41.8211 22.2246 41.268 21.7598 41.268 20.9655C41.268 20.1417 42.2447 19.5122 44.0275 19.5122C45.6103 19.5122 46.3458 19.9829 46.6518 20.5713C46.7459 20.7478 46.8047 20.9478 46.8224 21.089H45.1278C45.1219 21.0243 45.0984 20.9596 45.0337 20.8772C44.9042 20.7066 44.5747 20.5948 43.9863 20.5948C43.1567 20.5948 42.939 20.6948 42.939 20.9066C42.939 21.142 43.2156 21.195 44.1393 21.295C44.4982 21.3244 45.069 21.3832 45.2632 21.4068Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3707 19.977C28.6825 20.2241 28.859 20.6419 28.859 21.2479C28.859 21.7422 28.7355 22.1128 28.5001 22.3717C28.1824 22.7365 27.6587 22.9013 26.9762 22.9072C26.7643 22.9131 24.9521 22.9072 24.9521 22.9072V24.2016H23.3693V19.5828H26.9526C27.5881 19.5828 28.0706 19.7122 28.3707 19.977ZM27.1998 21.6068C27.2468 21.5245 27.2704 21.4185 27.2704 21.2714C27.2704 21.1185 27.2409 20.989 27.188 20.9184C27.088 20.7713 26.8997 20.7007 26.5937 20.7007H24.9403V21.8304H26.5819C26.9114 21.8304 27.1056 21.7539 27.1998 21.6068Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.649 20.0535C34.8609 20.2712 34.9609 20.5713 34.9609 20.989C34.9609 21.3479 34.8726 21.6539 34.7255 21.8598C34.5608 22.0834 34.3078 22.2717 33.9959 22.3188L35.3904 24.2016H33.637L32.4896 22.5718H31.0598V24.2016H29.4888V19.5828H33.1663C33.8959 19.5828 34.3725 19.7593 34.649 20.0535ZM33.3781 21.3774C33.4193 21.3068 33.431 21.2126 33.431 21.1361C33.431 21.0479 33.4193 20.9537 33.3781 20.8949C33.2957 20.7419 33.131 20.7007 32.8839 20.7007H31.0657V21.5421H32.9133C33.1663 21.5421 33.3193 21.495 33.3781 21.3774Z" class="ccustom" fill="#394149"></path> <path d="M40.7616 24.2016V23.0543H37.449V22.4541H40.6263V21.3303H37.449V20.736H40.7204V19.5828H35.8956V24.2016H40.7616Z" class="ccustom" fill="#394149"></path> <path d="M52.6952 20.7419V19.5828H47.182V20.7419H49.1295V24.2016H50.7417V20.7419H52.6952Z" class="ccustom" fill="#394149"></path> <path d="M54.8151 19.5828V24.2016H53.197V19.5828H54.8151Z" class="ccustom" fill="#394149"></path> <path d="M63.67 19.5828V24.2016H62.0516V19.5828H63.67Z" class="ccustom" fill="#394149"></path> <path d="M76.76 19.5828V22.4188C76.76 23.6662 75.63 24.2664 73.918 24.2664C72.318 24.2664 71.17 23.6721 71.17 22.2717V19.5828H72.765V22.2717C72.765 22.7718 73.194 23.0837 73.983 23.0837C74.736 23.0837 75.183 22.7601 75.183 22.2776V19.5828H76.76Z" class="ccustom" fill="#394149"></path> <path d="M83.112 22.766C83.112 21.9599 82.6 21.5362 81.406 21.4068C81.211 21.3832 80.641 21.3244 80.282 21.295C79.358 21.195 79.081 21.142 79.081 20.9066C79.081 20.6948 79.299 20.5948 80.129 20.5948C80.717 20.5948 81.047 20.7066 81.176 20.8772C81.241 20.9596 81.264 21.0243 81.27 21.089H82.965C82.947 20.9478 82.888 20.7478 82.794 20.5713C82.488 19.9829 81.753 19.5122 80.17 19.5122C78.387 19.5122 77.41 20.1417 77.41 20.9655C77.41 21.7598 77.964 22.2246 79.458 22.36L79.554 22.3685L79.714 22.3831L80.47 22.4541C81.253 22.5365 81.464 22.5894 81.464 22.8366C81.464 23.066 81.259 23.1896 80.394 23.1896C79.723 23.1896 79.329 23.0896 79.187 22.9189C79.129 22.8483 79.087 22.7424 79.076 22.6718H77.381C77.399 22.7895 77.428 22.9778 77.493 23.1308C77.781 23.778 78.534 24.2722 80.282 24.2722C82.159 24.2722 83.112 23.7427 83.112 22.766Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9666 25.9701C40.6435 25.9701 39.9475 26.5973 39.9475 27.5189C39.9475 28.559 40.6779 29.0867 41.9666 29.0867C43.3854 29.0867 43.9819 28.4749 43.9819 27.5189C43.9819 26.5476 43.3089 25.9701 41.9666 25.9701ZM41.9666 28.3181C41.2133 28.3181 40.9953 28.0083 40.9953 27.5303C40.9953 27.06 41.2324 26.7502 41.9628 26.7502C42.762 26.7502 42.9418 27.0982 42.9418 27.5303C42.9418 27.9892 42.7238 28.3181 41.9666 28.3181Z" class="ccustom" fill="#394149"></path> <path d="M34.6085 28.1078C34.6085 27.5839 34.2758 27.3085 33.4995 27.2244C33.3733 27.2091 33.0024 27.1709 32.7691 27.1518C32.1687 27.0867 31.989 27.0523 31.989 26.8994C31.989 26.7617 32.1305 26.6967 32.6697 26.6967C33.0521 26.6967 33.2662 26.7693 33.3504 26.8802C33.3924 26.9338 33.4077 26.9758 33.4116 27.0179H34.5129C34.5014 26.9261 34.4632 26.7961 34.402 26.6814C34.2031 26.299 33.7251 25.9931 32.6964 25.9931C31.5378 25.9931 30.903 26.4022 30.903 26.9376C30.903 27.4539 31.2624 27.756 32.2337 27.8439C32.3676 27.8554 32.6888 27.886 32.8915 27.9051C33.4001 27.9586 33.5377 27.9931 33.5377 28.1537C33.5377 28.3028 33.4039 28.3831 32.8418 28.3831C32.4058 28.3831 32.1496 28.3181 32.0578 28.2072C32.0196 28.1613 31.9928 28.0925 31.9852 28.0466H30.8838C30.8953 28.1231 30.9144 28.2454 30.9565 28.3449C31.1439 28.7655 31.6334 29.0867 32.7691 29.0867C33.989 29.0867 34.6085 28.7426 34.6085 28.1078Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9731 28.1919C26.9731 28.3984 26.9157 28.6011 26.801 28.7349C26.6251 28.9491 26.2962 29.0408 25.8718 29.0408H23.2064V26.0389H25.7991C26.2121 26.0389 26.476 26.1384 26.6213 26.2875C26.7513 26.4175 26.8087 26.5896 26.8087 26.7846C26.8087 26.9797 26.7628 27.1403 26.6634 27.2588C26.583 27.3583 26.4454 27.4347 26.3001 27.4539C26.5142 27.4806 26.7169 27.5877 26.8316 27.7368C26.9272 27.8477 26.9731 28.016 26.9731 28.1919ZM25.6844 27.1403C25.7226 27.0982 25.7456 27.037 25.7456 26.9644C25.7456 26.8917 25.7226 26.8305 25.6729 26.7885C25.6194 26.7387 25.5199 26.7196 25.3746 26.7196H24.2083V27.2091H25.4014C25.5314 27.2091 25.6309 27.19 25.6844 27.1403ZM25.5123 28.3602C25.692 28.3602 25.7991 28.3372 25.8603 28.2799C25.8985 28.2416 25.9138 28.1843 25.9138 28.1116C25.9138 28.0351 25.8947 27.9778 25.8488 27.9319C25.7915 27.8822 25.692 27.8592 25.5238 27.8592H24.2083V28.3602H25.5123Z" class="ccustom" fill="#394149"></path> <path d="M30.5739 28.2952V29.0408H27.4114V26.0389H30.5471V26.7885H28.4209V27.1747H30.4859V27.9051H28.4209V28.2952H30.5739Z" class="ccustom" fill="#394149"></path> <path d="M38.3297 26.0389V26.7923H37.0601V29.0408H36.0124V26.7923H34.7466V26.0389H38.3297Z" class="ccustom" fill="#394149"></path> <path d="M47.4812 26.0389V26.7999H45.443V27.2244H47.3856V27.9778H45.443V29.0408H44.4143V26.0389H47.4812Z" class="ccustom" fill="#394149"></path> <path d="M52.6625 26.7923V26.0389H49.0794V26.7923H50.3452V29.0408H51.393V26.7923H52.6625Z" class="ccustom" fill="#394149"></path> <path d="M56.5719 26.0389V29.0408H55.547V27.951H54.0097V29.0408H52.9849V26.0389H54.0097V27.1326H55.547V26.0389H56.5719Z" class="ccustom" fill="#394149"></path> <path d="M60.3412 29.0408V28.2952H58.1882V27.9051H60.2532V27.1747H58.1882V26.7885H60.3144V26.0389H57.1787V29.0408H60.3412Z" class="ccustom" fill="#394149"></path> <path d="M66.681 26.0389H67.671L66.574 29.0408H65.45C65.45 29.0408 64.849 27.2474 64.845 27.1976C64.842 27.2474 64.237 29.0408 64.237 29.0408H63.117L61.9927 26.0389H63.105C63.105 26.0389 63.756 27.928 63.756 27.9739C63.756 27.928 64.356 26.0389 64.356 26.0389H65.431C65.431 26.0389 66.035 27.928 66.035 27.9739C66.035 27.928 66.681 26.0389 66.681 26.0389Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M69.635 25.9701C68.312 25.9701 67.616 26.5973 67.616 27.5189C67.616 28.559 68.346 29.0867 69.635 29.0867C71.054 29.0867 71.65 28.4749 71.65 27.5189C71.65 26.5476 70.977 25.9701 69.635 25.9701ZM69.635 28.3181C68.882 28.3181 68.664 28.0083 68.664 27.5303C68.664 27.06 68.901 26.7502 69.631 26.7502C70.431 26.7502 70.61 27.0982 70.61 27.5303C70.61 27.9892 70.392 28.3181 69.635 28.3181Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M75.437 26.3449C75.574 26.4864 75.639 26.6814 75.639 26.9529C75.639 27.1862 75.582 27.385 75.486 27.5189C75.379 27.6642 75.215 27.7866 75.012 27.8171L75.918 29.0408H74.779L74.033 27.9816H73.104V29.0408H72.083V26.0389H74.473C74.947 26.0389 75.257 26.1537 75.437 26.3449ZM74.611 27.2053C74.637 27.1594 74.645 27.0982 74.645 27.0485C74.645 26.9911 74.637 26.93 74.611 26.8917C74.557 26.7923 74.45 26.7655 74.289 26.7655H73.108V27.3124H74.308C74.473 27.3124 74.572 27.2818 74.611 27.2053Z" class="ccustom" fill="#394149"></path> <path d="M79.111 29.0408V28.2416H77.283V26.0389H76.247V29.0408H79.111Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M83.166 27.4844C83.166 27.951 83.12 28.2034 82.983 28.4405C82.776 28.819 82.367 29.0408 81.644 29.0408H79.518V26.0389H81.621C82.34 26.0389 82.765 26.2416 82.975 26.5896C83.124 26.8229 83.166 27.0714 83.166 27.4844ZM81.449 28.3028C81.774 28.3028 81.958 28.2263 82.069 28.0581C82.138 27.9548 82.157 27.7139 82.157 27.5036C82.153 27.3124 82.13 27.1097 82.069 27.0179C81.95 26.8382 81.771 26.7732 81.457 26.7732H80.543V28.3028H81.449Z" class="ccustom" fill="#394149"></path> <path d="M42.1449 43.6405H40.5603C40.5603 43.6405 39.5263 46.663 39.5263 46.7364C39.5263 46.663 38.5596 43.6405 38.5596 43.6405H36.8403C36.8403 43.6405 35.8797 46.663 35.8797 46.7364C35.8797 46.663 34.8396 43.6405 34.8396 43.6405H33.0591L34.8579 48.4434H36.6506C36.6506 48.4434 37.6173 45.5739 37.6234 45.4944C37.6296 45.5739 38.5901 48.4434 38.5901 48.4434H40.3889L42.1449 43.6405Z" class="ccustom" fill="#394149"></path> <path d="M44.3133 48.4434V43.6405H42.6307V48.4434H44.3133Z" class="ccustom" fill="#394149"></path> <path d="M50.8579 43.6405V48.4434H49.2181L46.8381 45.7697V48.4434H45.2596V43.6405H46.9849L49.2915 46.2531V43.6405H50.8579Z" class="ccustom" fill="#394149"></path> <path d="M57.4124 48.4434V43.6405H55.8461V46.2531L53.5395 43.6405H51.8141V48.4434H53.3926V45.7697L55.7727 48.4434H57.4124Z" class="ccustom" fill="#394149"></path> <path d="M63.429 47.2503V48.4434H58.3686V43.6405H63.386V44.8397H59.9839V45.4577H63.288V46.6263H59.9839V47.2503H63.429Z" class="ccustom" fill="#394149"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M69.896 45.1028C69.896 44.6684 69.792 44.3564 69.572 44.13C69.284 43.8241 68.789 43.6405 68.03 43.6405H64.206V48.4434H65.84V46.7486H67.327L68.52 48.4434H70.343L68.893 46.4856C69.217 46.4366 69.48 46.2408 69.652 46.0083C69.804 45.7942 69.896 45.476 69.896 45.1028ZM68.305 45.2558C68.305 45.3353 68.293 45.4332 68.25 45.5066C68.189 45.629 68.03 45.6779 67.767 45.6779H65.846V44.803H67.736C67.993 44.803 68.165 44.8458 68.25 45.0049C68.293 45.0661 68.305 45.164 68.305 45.2558Z" class="ccustom" fill="#394149"></path> <path d="M37.2595 35.1669L36.596 33.1247L35.9324 35.1669H33.7851L35.5223 36.429L34.8588 38.4712L36.596 37.2091L38.3331 38.4712L37.6696 36.429L39.4068 35.1669H37.2595Z" class="ccustom" fill="#394149"></path> <path d="M44.2565 33.1234L44.9336 35.1656H47.1247L45.3521 36.4278L46.0292 38.4699L44.2565 37.2078L42.4839 38.4699L43.161 36.4278L41.3883 35.1656H43.5794L44.2565 33.1234Z" class="ccustom" fill="#394149"></path> <path d="M52.533 35.1656L51.856 33.1234L51.1789 35.1656H48.9877L50.7604 36.4278L50.0833 38.4699L51.856 37.2078L53.6286 38.4699L52.9515 36.4278L54.7242 35.1656H52.533Z" class="ccustom" fill="#394149"></path> <path d="M59.4558 33.1234L60.1329 35.1656H62.324L60.5514 36.4278L61.2285 38.4699L59.4558 37.2078L57.6832 38.4699L58.3603 36.4278L56.5876 35.1656H58.7788L59.4558 33.1234Z" class="ccustom" fill="#394149"></path> <path d="M67.78 35.1656L67.116 33.1234L66.452 35.1656H64.305L66.042 36.4278L65.379 38.4699L67.116 37.2078L68.853 38.4699L68.19 36.4278L69.927 35.1656H67.78Z" class="ccustom" fill="#394149"></path> <path d="M95.638 11.2224C96.273 9.6079 95.997 7.7512 95.412 6.1898C94.796 4.5469 93.724 2.9082 92.122 2.0441C92.042 3.7756 92.571 5.4861 93.149 7.0286C93.669 8.4159 94.306 9.8939 95.359 11.0412C95.521 11.9104 95.645 12.7772 95.732 13.64C95.383 12.7287 94.818 11.8981 94.112 11.2301C93.203 10.3696 91.85 9.7058 90.581 10.0984C90.953 11.5015 91.8 12.8467 92.804 13.7903C93.594 14.533 94.637 15.4846 95.865 15.5221C95.916 16.7922 95.887 18.0507 95.782 19.2921C95.609 18.3837 95.238 17.5283 94.701 16.8913C93.964 16.0159 92.871 14.9466 91.476 15.1255C91.552 16.5457 92.119 18.0008 92.908 19.0942C93.534 19.9631 94.362 21.0706 95.537 21.3567C95.349 22.5762 95.087 23.7755 94.754 24.9491C94.751 24.0505 94.553 23.1684 94.159 22.4609C93.604 21.4633 92.739 20.219 91.342 20.1217C91.137 21.515 91.415 23.0381 91.975 24.2495C92.422 25.2178 93.019 26.4526 94.106 26.9635C93.649 28.2265 93.109 29.4543 92.489 30.6392C92.707 29.6178 92.698 28.5415 92.441 27.573C92.086 26.2382 91.206 24.836 89.792 24.4292C89.292 25.903 89.361 27.5474 89.652 29.0452C89.891 30.2785 90.36 31.7269 91.412 32.528C90.724 33.6387 89.963 34.7046 89.132 35.7188C89.579 34.7242 89.8 33.6363 89.681 32.6404C89.508 31.19 89.101 29.6387 87.62 28.8657C86.779 30.3157 86.584 31.9424 86.513 33.5491C86.455 34.8481 86.642 36.4503 87.545 37.5071C86.552 38.5385 85.482 39.5038 84.339 40.394C85.077 39.4469 85.594 38.3356 85.703 37.2366C85.858 35.6837 85.783 33.9743 84.404 32.8346C83.226 34.0656 82.522 35.8785 82.178 37.4531C81.873 38.8452 81.555 40.4931 82.28 41.8632C80.825 42.8134 79.271 43.6505 77.628 44.3595C78.784 43.5357 79.73 42.4054 80.181 41.2384C80.772 39.709 81.137 37.8864 79.987 36.3546C78.445 37.3421 77.312 39.0268 76.419 40.5635C75.653 41.8821 74.86 43.702 75.254 45.2723C74.344 45.5809 73.411 45.8519 72.456 46.0831L72.513 46.3176C73.471 46.0855 74.408 45.8136 75.321 45.5041C75.961 47.3947 78.057 48.0195 79.752 48.2952C82.167 48.6881 85.043 47.9269 87.105 46.3932C86.016 44.8553 83.796 44.6993 82.122 44.5816L82.1 44.5801C80.266 44.4512 78.282 44.6234 76.438 45.1027C78.568 44.2916 80.562 43.2716 82.401 42.0726L82.426 42.1126C83.433 43.7488 85.457 43.8128 87.045 43.7094C89.2 43.5692 91.687 42.2593 93.126 40.4486C91.772 39.2608 89.773 39.5931 88.223 39.8506L88.215 39.852C86.486 40.1394 84.597 40.7663 83.011 41.7317C83.162 41.6128 83.309 41.4871 83.453 41.3552C84.995 40.2557 86.417 39.0258 87.708 37.6848C87.726 37.7027 87.744 37.7203 87.762 37.7378C89.018 38.9909 90.841 38.6603 92.265 38.2502C94.175 37.7002 96.155 36.0409 97.104 34.136C95.633 33.312 93.875 33.9909 92.508 34.5281C91.005 35.1181 89.416 36.0622 88.194 37.2659C88.32 37.1069 88.441 36.9407 88.555 36.7687C89.69 35.487 90.712 34.1145 91.61 32.6665L91.649 32.6906L91.659 32.6969C93.078 33.6101 94.686 32.947 95.96 32.2948C97.689 31.4099 99.079 29.4651 99.679 27.5525C98.145 27.0612 96.63 28.0255 95.452 28.7892C94.162 29.6249 92.856 30.8169 91.96 32.184C92.026 32.0491 92.088 31.9111 92.145 31.7706C93.006 30.2683 93.737 28.6913 94.329 27.0554L94.36 27.0658L94.365 27.0678C95.656 27.5565 97.093 26.7938 98.03 25.9574C99.332 24.7942 100.251 23.0059 100.466 21.2588C99.12 21.0844 97.851 22.126 96.984 23.0143C95.986 24.0375 95.089 25.2468 94.538 26.5902C94.579 26.4436 94.614 26.2947 94.643 26.1442C95.144 24.6074 95.524 23.0225 95.774 21.4023L95.812 21.4073C97.172 21.6275 98.43 20.5926 99.182 19.5881C100.24 18.1746 100.785 16.2183 100.648 14.4451C99.289 14.5403 98.253 15.8339 97.582 16.8805C96.804 18.0926 96.159 19.4645 95.877 20.8998C95.886 20.785 95.891 20.6696 95.893 20.5538C96.1 18.9045 96.174 17.2214 96.106 15.5176C97.495 15.4689 98.524 14.1793 99.054 13.0357C99.811 11.4 99.933 9.3322 99.428 7.5897C98.105 7.961 97.367 9.4783 96.932 10.6464C96.43 11.9932 96.08 13.4623 96.077 14.9227C96.005 13.6975 95.859 12.4625 95.638 11.2224Z" class="ccustom" fill="#394149"></path> </svg>
			</a>
            <Link to='/' style={linkStyle}>   
                   CIA YACHTS
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
