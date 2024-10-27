import Image1 from '@/images/section2-img1.svg';
import Image2 from '@/images/section2-img2.svg';
import Image from 'next/image';

// meshal
function Section2() {
  return (
    <section className="w-full bg-white pt-16 pb-[250px] relative mx-auto flex justify-center items-center flex-col gap-10 px-12 md:px-2">
      {/* arrow absolute 1 */}
      <div className="absolute inset-y-0 left-0 top-1/3 hidden md:inline-block">
        <svg width="154" height="210" viewBox="0 0 154 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.01" x="0.0522461" width="153.595" height="209.335" fill="#D8D8D8" />
          <mask id="mask0_301_3318" maskUnits="userSpaceOnUse" x="0" y="0" width="154" height="210">
            <rect x="0.0522461" width="153.595" height="209.335" fill="white" />
          </mask>
          <g mask="url(#mask0_301_3318)">
            <path
              d="M69.0509 24.5342L70.5173 24.2188L69.0509 24.5342ZM141.472 181.964C141.528 182.791 140.904 183.506 140.077 183.562L126.608 184.476C125.781 184.532 125.066 183.907 125.01 183.08C124.954 182.254 125.578 181.538 126.405 181.482L138.378 180.671L137.566 168.698C137.51 167.872 138.135 167.156 138.961 167.1C139.788 167.044 140.503 167.669 140.559 168.495L141.472 181.964ZM139.976 182.066C138.989 183.196 138.989 183.196 138.989 183.196C138.989 183.196 138.989 183.196 138.989 183.196C138.989 183.196 138.989 183.196 138.989 183.196C138.989 183.196 138.989 183.195 138.988 183.195C138.988 183.195 138.988 183.195 138.987 183.194C138.986 183.193 138.984 183.191 138.981 183.189C138.976 183.184 138.968 183.178 138.958 183.169C138.938 183.151 138.908 183.125 138.869 183.091C138.791 183.022 138.674 182.92 138.521 182.785C138.215 182.515 137.763 182.114 137.177 181.591L139.174 179.353C139.756 179.872 140.204 180.269 140.506 180.535C140.657 180.668 140.771 180.769 140.848 180.836C140.886 180.87 140.915 180.895 140.934 180.911C140.944 180.92 140.951 180.926 140.955 180.93C140.958 180.932 140.959 180.934 140.961 180.935C140.961 180.935 140.962 180.935 140.962 180.936C140.962 180.936 140.962 180.936 140.962 180.936C140.962 180.936 140.962 180.936 140.962 180.936C140.962 180.936 140.962 180.936 140.962 180.936C140.962 180.936 140.962 180.936 139.976 182.066ZM133.455 178.234C132.358 177.236 131.116 176.098 129.746 174.832L131.782 172.629C133.146 173.89 134.383 175.022 135.474 176.016L133.455 178.234ZM126.062 171.402C124.91 170.322 123.696 169.178 122.428 167.974L124.494 165.799C125.757 166.998 126.966 168.138 128.113 169.213L126.062 171.402ZM118.825 164.53C117.667 163.416 116.473 162.261 115.249 161.068L117.343 158.92C118.562 160.108 119.751 161.258 120.904 162.368L118.825 164.53ZM111.691 157.579C110.53 156.434 109.347 155.259 108.144 154.057L110.265 151.935C111.463 153.133 112.641 154.303 113.798 155.444L111.691 157.579ZM104.61 150.5C103.456 149.331 102.287 148.139 101.107 146.926L103.256 144.834C104.432 146.041 105.596 147.228 106.745 148.393L104.61 150.5ZM97.6451 143.346C96.5024 142.156 95.3513 140.949 94.1937 139.725L96.3729 137.663C97.5253 138.881 98.6714 140.084 99.8091 141.269L97.6451 143.346ZM90.7595 136.068C89.6355 134.862 88.5074 133.642 87.3773 132.409L89.5883 130.382C90.7129 131.608 91.8355 132.822 92.9543 134.023L90.7595 136.068ZM84.0121 128.71C82.8986 127.475 81.7849 126.229 80.6728 124.974L82.9181 122.985C84.0242 124.233 85.1321 125.472 86.2399 126.7L84.0121 128.71ZM77.3788 121.222C76.2865 119.966 75.1974 118.702 74.1134 117.43L76.3964 115.484C77.4739 116.748 78.5565 118.005 79.6426 119.254L77.3788 121.222ZM70.8872 113.606C69.8182 112.325 68.7558 111.038 67.7019 109.745L70.0266 107.849C71.0732 109.132 72.1284 110.411 73.1905 111.684L70.8872 113.606ZM64.5606 105.847C63.5201 104.539 62.4898 103.228 61.4714 101.913L63.843 100.076C64.8531 101.38 65.8754 102.681 66.9081 103.979L64.5606 105.847ZM58.4272 97.9262C57.419 96.5859 56.4249 95.2437 55.4468 93.9008L57.8717 92.1346C58.8404 93.4645 59.8253 94.7943 60.8246 96.1227L58.4272 97.9262ZM52.5342 89.8312C51.5637 88.4502 50.6119 87.0696 49.6809 85.6906L52.1674 84.012C53.0874 85.3748 54.0285 86.74 54.9887 88.1063L52.5342 89.8312ZM46.9167 81.5042C46.0041 80.0898 45.1156 78.6783 44.2534 77.271L46.8114 75.7037C47.6609 77.0902 48.537 78.482 49.4375 79.8778L46.9167 81.5042ZM41.6722 72.9326C40.8221 71.4586 40.0036 69.9908 39.2195 68.5307L41.8625 67.1113C42.6315 68.5432 43.4351 69.9846 44.2709 71.4338L41.6722 72.9326ZM36.9158 64.0602C36.1631 62.533 35.4517 61.0159 34.7846 59.5108L37.5274 58.2953C38.1768 59.7608 38.8709 61.2409 39.6067 62.7339L36.9158 64.0602ZM32.8366 54.8182C32.2133 53.2032 31.6467 51.6041 31.1413 50.0235L33.9987 49.1098C34.4849 50.6301 35.0316 52.1737 35.6354 53.738L32.8366 54.8182ZM29.7583 45.1174C29.3469 43.4178 29.0153 41.7425 28.7697 40.0952L31.737 39.653C31.9682 41.2043 32.282 42.7915 32.6741 44.4116L29.7583 45.1174ZM28.4604 37.5792C28.3735 36.6741 28.2999 35.7914 28.2392 34.9307L31.2318 34.7198C31.2906 35.5543 31.3621 36.4117 31.4467 37.2924L28.4604 37.5792ZM28.0243 29.7358C28.0068 27.8862 28.0594 26.1561 28.1777 24.5396L31.1697 24.7585C31.0581 26.2847 31.0073 27.932 31.0242 29.7073L28.0243 29.7358ZM28.8699 19.2451C29.2509 17.3168 29.7554 15.5969 30.3732 14.0733L33.1534 15.2007C32.6168 16.5239 32.1625 18.0579 31.813 19.8267L28.8699 19.2451ZM33.1852 9.27765C34.5109 7.69982 36.0481 6.55209 37.7342 5.79051L38.9691 8.52454C37.7029 9.0965 36.5257 9.9654 35.4821 11.2075L33.1852 9.27765ZM43.3087 4.61751C45.1144 4.59933 46.9574 4.87854 48.7783 5.37506L47.9891 8.26938C46.3832 7.83148 44.8187 7.60246 43.3389 7.61736L43.3087 4.61751ZM53.8136 7.28806C55.405 8.05662 56.9574 8.95777 58.4333 9.9463L56.7638 12.4389C55.3941 11.5214 53.9631 10.6918 52.5089 9.98952L53.8136 7.28806ZM62.651 13.1786C64.0434 14.3943 65.3135 15.6697 66.411 16.9529L64.1312 18.9028C63.1363 17.7397 61.9704 16.5669 60.678 15.4385L62.651 13.1786ZM69.5068 21.4681C69.9708 22.3895 70.323 23.3152 70.5173 24.2188L67.5844 24.8496C67.4563 24.2538 67.2071 23.5714 66.8273 22.8173L69.5068 21.4681ZM70.5173 24.2188C70.678 24.966 70.8489 25.8058 71.0122 26.7207L68.0589 27.2479C67.9034 26.3765 67.7399 25.5724 67.5844 24.8496L70.5173 24.2188ZM71.6837 31.8342C71.8149 33.4735 71.8678 35.2204 71.7857 37.0226L68.7888 36.886C68.8643 35.229 68.8162 33.6093 68.6932 32.0737L71.6837 31.8342ZM71.145 42.2269C70.7929 43.9174 70.2843 45.6175 69.5748 47.2855L66.8142 46.1113C67.4383 44.6438 67.8916 43.1345 68.208 41.6152L71.145 42.2269ZM66.9608 51.9305C65.9606 53.3155 64.7752 54.6377 63.3784 55.8694L61.3942 53.6193C62.6222 52.5364 63.6577 51.3802 64.5286 50.1741L66.9608 51.9305ZM59.0814 58.9512C57.6515 59.7839 56.0773 60.5413 54.347 61.212L53.2629 58.4147C54.8549 57.7977 56.2859 57.1075 57.5716 56.3588L59.0814 58.9512ZM49.4113 62.772C47.8283 63.1721 46.142 63.5124 44.3464 63.7875L43.8922 60.8221C45.5997 60.5605 47.1919 60.2386 48.6762 59.8635L49.4113 62.772ZM39.2851 64.363C37.6675 64.4882 35.9739 64.5673 34.2008 64.5972L34.1502 61.5976C35.8664 61.5687 37.4997 61.4922 39.0536 61.372L39.2851 64.363ZM29.1226 64.5533C27.496 64.5002 25.8098 64.4098 24.062 64.2803L24.2836 61.2885C25.9923 61.4151 27.6372 61.5032 29.2205 61.5549L29.1226 64.5533ZM19.0183 63.8153C17.3893 63.637 15.7114 63.4275 13.9834 63.1853L14.3997 60.2144C16.099 60.4525 17.7469 60.6582 19.3447 60.8331L19.0183 63.8153ZM8.98684 62.417C7.38542 62.1497 5.74412 61.8563 4.06201 61.5359L4.62326 58.5889C6.28375 58.9051 7.90259 59.1945 9.48075 59.4579L8.98684 62.417ZM1.53087 61.0397C0.671052 60.8663 -0.175223 60.6856 -1.00817 60.4976L-0.347721 57.5712C0.462387 57.754 1.28612 57.93 2.1237 58.0988L1.53087 61.0397ZM-5.88944 59.2725C-7.57134 58.8056 -9.19309 58.3066 -10.7566 57.7773L-9.79458 54.9357C-8.28548 55.4466 -6.71699 55.9293 -5.08696 56.3818L-5.88944 59.2725ZM-15.5468 55.9888C-17.1688 55.323 -18.7197 54.6211 -20.202 53.8857L-18.8687 51.1982C-17.4519 51.9011 -15.9659 52.5738 -14.4076 53.2135L-15.5468 55.9888ZM-24.6916 51.4348C-26.1998 50.5301 -27.6244 49.5864 -28.9692 48.6074L-27.2037 46.182C-25.9322 47.1075 -24.5819 48.0022 -23.1484 48.8622L-24.6916 51.4348ZM-32.9749 45.3856C-34.2898 44.2164 -35.51 43.0088 -36.6408 41.7682L-34.4237 39.7472C-33.3639 40.9099 -32.2184 42.0438 -30.9814 43.1438L-32.9749 45.3856ZM-39.901 37.7752C-40.9314 36.3612 -41.8625 34.9163 -42.7016 33.4475L-40.0967 31.9593C-39.3114 33.3338 -38.4404 34.6856 -37.4764 36.0084L-39.901 37.7752ZM-45.0155 28.8282C-45.7093 27.2333 -46.3088 25.6209 -46.8229 23.9995L-43.9632 23.0928C-43.479 24.6199 -42.9154 26.1352 -42.2645 27.6314L-45.0155 28.8282ZM-48.1372 19.0293C-48.4992 17.3415 -48.7797 15.6531 -48.9889 13.9733L-46.0118 13.6027C-45.8129 15.2008 -45.5465 16.8027 -45.2039 18.4002L-48.1372 19.0293ZM-49.4168 8.86631C-49.4938 7.14205 -49.5044 5.43638 -49.4598 3.7595L-46.4608 3.83941C-46.5037 5.44969 -46.4935 7.08387 -46.4198 8.73235L-49.4168 8.86631ZM-49.1574 -1.32715C-48.9988 -3.06289 -48.7892 -4.75397 -48.5423 -6.38771L-45.576 -5.93951C-45.8147 -4.35988 -46.017 -2.72737 -46.1698 -1.05425L-49.1574 -1.32715ZM-47.6461 -11.3858C-47.2838 -13.135 -46.8906 -14.789 -46.4882 -16.328L-43.5858 -15.5692C-43.9761 -14.0761 -44.3574 -12.4723 -44.7085 -10.7773L-47.6461 -11.3858ZM-45.0788 -21.2085C-44.4495 -23.1951 -43.8606 -24.8322 -43.4002 -26.0391L-40.5973 -24.9698C-41.0394 -23.8108 -41.6088 -22.2283 -42.2188 -20.3026L-45.0788 -21.2085Z"
              fill="#54585A"
            />
          </g>
        </svg>
      </div>
      {/* arrow absolute 2 */}
      <div className="absolute right-0 bottom-10 hidden md:inline-block">
        <svg width="177" height="242" viewBox="0 0 177 242" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.01" width="177" height="241.234" fill="#D8D8D8" />
          <mask id="mask0_301_3314" maskUnits="userSpaceOnUse" x="0" y="0" width="177" height="242">
            <rect width="177" height="241.234" fill="white" />
          </mask>
          <g mask="url(#mask0_301_3314)">
            <path
              d="M118.88 160L117.556 159.295L118.88 160ZM38.9651 227.31C38.21 226.969 37.8741 226.081 38.2148 225.325L43.7675 213.02C44.1082 212.265 44.9966 211.929 45.7517 212.27C46.5068 212.611 46.8427 213.499 46.502 214.254L41.5663 225.192L52.5043 230.128C53.2594 230.468 53.5953 231.357 53.2546 232.112C52.9138 232.867 52.0255 233.203 51.2704 232.862L38.9651 227.31ZM217.761 0C219.193 0.448386 219.193 0.448438 219.193 0.448492C219.193 0.448513 219.193 0.44857 219.193 0.448613C219.193 0.448699 219.193 0.448795 219.193 0.448901C219.193 0.449113 219.193 0.449366 219.192 0.44966C219.192 0.450247 219.192 0.450997 219.192 0.451908C219.191 0.453732 219.19 0.456204 219.189 0.459319C219.187 0.46555 219.185 0.474358 219.181 0.485708C219.174 0.508408 219.163 0.541282 219.15 0.584067C219.122 0.669635 219.081 0.794856 219.027 0.957628C218.918 1.28316 218.756 1.75897 218.539 2.36824L215.713 1.36184C215.923 0.772448 216.078 0.315735 216.181 0.0084134C216.232 -0.145241 216.27 -0.261531 216.295 -0.338367C216.307 -0.376783 216.316 -0.405335 216.322 -0.423759C216.325 -0.432971 216.327 -0.439651 216.329 -0.443767C216.329 -0.445824 216.33 -0.447241 216.33 -0.448012C216.33 -0.448398 216.33 -0.448622 216.33 -0.448685C216.33 -0.448716 216.33 -0.448707 216.33 -0.448657C216.33 -0.448632 216.33 -0.448597 216.33 -0.448552C216.33 -0.448529 216.33 -0.448488 216.33 -0.448477C216.33 -0.448433 216.33 -0.448386 217.761 0ZM217.108 6.1592C216.667 7.26966 216.154 8.51599 215.567 9.87421L212.813 8.6852C213.387 7.35566 213.889 6.13668 214.319 5.05201L217.108 6.1592ZM213.909 13.5717C213.37 14.7293 212.788 15.9394 212.163 17.1916L209.479 15.8511C210.092 14.6248 210.661 13.4396 211.189 12.3058L213.909 13.5717ZM210.311 20.7739C209.693 21.9285 209.041 23.1081 208.355 24.3058L205.752 22.8143C206.423 21.6429 207.061 20.4887 207.666 19.3585L210.311 20.7739ZM206.294 27.78C205.601 28.9087 204.878 30.0473 204.125 31.1903L201.62 29.54C202.355 28.4247 203.06 27.3131 203.737 26.2103L206.294 27.78ZM201.845 34.53C201.074 35.6192 200.275 36.7078 199.448 37.7911L197.063 35.9707C197.867 34.9171 198.645 33.8575 199.397 32.7963L201.845 34.53ZM196.929 40.9641C196.074 41.9992 195.192 43.0251 194.283 44.0377L192.051 42.0339C192.931 41.0532 193.786 40.0584 194.616 39.0537L196.929 40.9641ZM191.507 46.999C190.563 47.9618 189.592 48.9077 188.595 49.8328L186.555 47.6333C187.516 46.7417 188.452 45.8289 189.365 44.8987L191.507 46.999ZM185.545 52.5218C184.508 53.39 183.444 54.234 182.353 55.0499L180.556 52.6475C181.601 51.8656 182.623 51.0556 183.62 50.2212L185.545 52.5218ZM179.018 57.3967C177.886 58.144 176.728 58.8601 175.543 59.5409L174.049 56.9396C175.178 56.2907 176.283 55.6075 177.365 54.8933L179.018 57.3967ZM171.933 61.461C170.714 62.0586 169.468 62.6183 168.196 63.1365L167.064 60.3582C168.271 59.8666 169.454 59.3352 170.613 58.7671L171.933 61.461ZM164.344 64.5486C163.058 64.9686 161.747 65.3459 160.411 65.6772L159.689 62.7654C160.953 62.4518 162.195 62.0946 163.413 61.6968L164.344 64.5486ZM156.405 66.5165C155.075 66.7448 153.723 66.9277 152.347 67.0623L152.055 64.0766C153.358 63.9491 154.639 63.7759 155.897 63.5598L156.405 66.5165ZM148.252 67.3158C146.904 67.3515 145.536 67.3412 144.148 67.2826L144.274 64.2853C145.595 64.341 146.894 64.3507 148.173 64.3169L148.252 67.3158ZM140.094 66.9784C138.766 66.8356 137.42 66.6491 136.056 66.4169L136.559 63.4594C137.863 63.6814 139.148 63.8595 140.415 63.9956L140.094 66.9784ZM132.027 65.6087C130.739 65.3117 129.437 64.9745 128.12 64.5958L128.948 61.7126C130.216 62.0769 131.467 62.4006 132.701 62.6854L132.027 65.6087ZM126.132 63.9963C125.446 63.7797 124.776 63.5736 124.124 63.3781L124.984 60.5042C125.652 60.7042 126.336 60.9146 127.035 61.1355L126.132 63.9963ZM120.384 62.3242C118.995 61.9596 117.697 61.6524 116.486 61.3999L117.098 58.4631C118.365 58.7272 119.713 59.0466 121.146 59.4224L120.384 62.3242ZM112.618 60.7388C111.191 60.5576 109.939 60.4805 108.845 60.4957L108.804 57.496C110.065 57.4785 111.461 57.5677 112.996 57.7627L112.618 60.7388ZM105.31 61.0131C104.144 61.4133 103.425 62.0104 102.971 62.7386L100.425 61.1526C101.293 59.7587 102.613 58.767 104.336 58.1756L105.31 61.0131ZM102.226 65.8085C102.21 66.8719 102.351 68.1056 102.643 69.5113L99.7058 70.1211C99.3848 68.5751 99.2064 67.1119 99.2268 65.7631L102.226 65.8085ZM103.635 73.2372C104.006 74.4181 104.441 75.6648 104.931 76.9732L102.12 78.0237C101.617 76.6778 101.164 75.3794 100.773 74.1361L103.635 73.2372ZM106.39 80.6897C106.879 81.8866 107.398 83.1209 107.941 84.3903L105.182 85.5695C104.635 84.2902 104.109 83.0402 103.613 81.824L106.39 80.6897ZM109.539 88.0855C110.067 89.2966 110.605 90.5267 111.155 91.7856L108.406 92.9858C107.859 91.7333 107.316 90.4944 106.789 89.2844L109.539 88.0855ZM112.767 95.4985C113.295 96.7251 113.826 97.9698 114.355 99.2298L111.588 100.39C111.064 99.1411 110.537 97.9055 110.012 96.6853L112.767 95.4985ZM115.899 102.977C116.402 104.224 116.899 105.483 117.385 106.753L114.584 107.826C114.104 106.575 113.614 105.332 113.117 104.1L115.899 102.977ZM118.8 110.567C119.258 111.844 119.701 113.129 120.125 114.421L117.275 115.358C116.86 114.093 116.425 112.833 115.976 111.579L118.8 110.567ZM121.341 118.317C121.726 119.625 122.089 120.94 122.425 122.257L119.518 122.998C119.192 121.719 118.839 120.441 118.463 119.164L121.341 118.317ZM123.356 126.251C123.639 127.597 123.89 128.945 124.104 130.293L121.141 130.763C120.935 129.468 120.694 128.169 120.42 126.868L123.356 126.251ZM124.636 134.378C124.774 135.754 124.869 137.129 124.915 138.498L121.917 138.6C121.873 137.3 121.783 135.992 121.651 134.677L124.636 134.378ZM124.902 142.64C124.844 144.03 124.729 145.413 124.553 146.785L121.578 146.403C121.742 145.12 121.85 143.824 121.905 142.515L124.902 142.64ZM123.828 150.898C123.521 152.254 123.146 153.598 122.697 154.925L119.855 153.964C120.269 152.738 120.617 151.494 120.902 150.235L123.828 150.898ZM121.145 158.813C120.85 159.449 120.537 160.079 120.204 160.705L117.556 159.295C117.863 158.718 118.152 158.137 118.423 157.551L121.145 158.813ZM120.204 160.705C119.881 161.311 119.553 161.912 119.219 162.509L116.6 161.046C116.924 160.467 117.243 159.883 117.556 159.295L120.204 160.705ZM117.151 166.048C116.437 167.217 115.702 168.368 114.95 169.502L112.45 167.843C113.183 166.74 113.897 165.62 114.591 164.484L117.151 166.048ZM112.624 172.871C111.826 173.984 111.01 175.079 110.18 176.156L107.804 174.324C108.614 173.274 109.409 172.207 110.186 171.122L112.624 172.871ZM107.626 179.355C106.755 180.41 105.869 181.447 104.971 182.466L102.72 180.483C103.597 179.488 104.462 178.475 105.313 177.445L107.626 179.355ZM102.222 185.492C101.287 186.491 100.341 187.471 99.3859 188.432L97.2574 186.318C98.1922 185.377 99.118 184.418 100.033 183.441L102.222 185.492ZM96.4679 191.288C95.4764 192.231 94.4778 193.156 93.4742 194.061L91.465 191.833C92.4492 190.946 93.4281 190.039 94.3995 189.115L96.4679 191.288ZM90.4102 196.753C89.3694 197.644 88.3254 198.515 87.2805 199.365L85.3865 197.039C86.4128 196.203 87.4377 195.348 88.4592 194.474L90.4102 196.753ZM84.0892 201.9C83.0041 202.741 81.9202 203.561 80.8401 204.359L79.0574 201.946C80.1194 201.161 81.1849 200.355 82.2514 199.529L84.0892 201.9ZM77.5361 206.743C76.4096 207.537 75.2899 208.308 74.1802 209.055L72.5051 206.566C73.5975 205.831 74.6992 205.072 75.8076 204.291L77.5361 206.743ZM70.7744 211.295C69.6075 212.045 68.4554 212.768 67.3215 213.464L65.7516 210.908C66.8685 210.222 68.0032 209.51 69.1522 208.771L70.7744 211.295ZM63.8246 215.563C62.6177 216.271 61.4377 216.946 60.2893 217.589L58.8242 214.971C59.9555 214.337 61.1181 213.672 62.307 212.975L63.8246 215.563ZM56.7261 219.536C55.4657 220.208 54.2558 220.837 53.1041 221.421L51.7467 218.746C52.8807 218.17 54.0723 217.552 55.3139 216.889L56.7261 219.536ZM49.463 223.22C48.1019 223.875 46.8618 224.45 45.7616 224.947L44.5258 222.214C45.6055 221.726 46.8242 221.16 48.1631 220.516L49.463 223.22ZM41.9988 226.585C41.3957 226.837 40.9277 227.025 40.6088 227.152C40.4493 227.215 40.327 227.263 40.2438 227.295C40.2021 227.311 40.1703 227.323 40.1483 227.332C40.1374 227.336 40.1289 227.339 40.1229 227.341C40.1199 227.343 40.1176 227.344 40.1159 227.344C40.115 227.344 40.1143 227.345 40.1138 227.345C40.1135 227.345 40.1133 227.345 40.1131 227.345C40.113 227.345 40.1129 227.345 40.1128 227.345C40.1128 227.345 40.1127 227.345 40.1127 227.345C40.1127 227.345 40.1126 227.345 39.5821 225.942C39.0516 224.539 39.0515 224.539 39.0515 224.539C39.0515 224.539 39.0514 224.539 39.0514 224.539C39.0514 224.539 39.0514 224.539 39.0513 224.539C39.0513 224.539 39.0513 224.539 39.0514 224.539C39.0515 224.539 39.0517 224.539 39.0521 224.539C39.0529 224.539 39.0544 224.538 39.0564 224.537C39.0606 224.536 39.0672 224.533 39.0764 224.53C39.0946 224.523 39.1228 224.512 39.1607 224.497C39.2365 224.468 39.3512 224.423 39.5029 224.363C39.8065 224.243 40.2584 224.061 40.845 223.816L41.9988 226.585Z"
              fill="#54585A"
            />
          </g>
        </svg>
      </div>
      <div className="container max-w-4xl flex flex-col md:flex-row justify-center items-center gap-20">
        <Image src={Image1} alt="Cityscape Illustration" className="w-96 max-w-2xl h-auto object-contain" />
        <div className="text-grey flex flex-col gap-6">
          <h3 className="font-bold text-3xl">
            We <span className="text-red">innovate</span> today <br /> for the future
          </h3>
          <p className="text-sm text-justify">
            Boubyan Group is a leading renowned financial institution that provides reliable and sound products and solutions with the promise of
            stable growth, secure and sustainable results.
            <br />
            <br />
            Translating our strong belief in the core role of technology in the progress and advancement of all our activities, the Group has founded
            Boubyan Digital Factory to support and strengthen the culture of innovation in a digitally driven environment that builds on the achieved
            successes to prepare for future milestones.
          </p>
        </div>
      </div>
      <div className="container max-w-4xl flex flex-col md:flex-row justify-center items-center gap-20">
        <Image src={Image2} alt="Cityscape Illustration" className="w-96 max-w-2xl h-auto object-contain md:order-last" />
        <div className="text-grey flex flex-col gap-6 md:order-first">
          <h3 className="font-bold text-3xl">
            We create <span className="text-red">solutions</span> <br /> for a digital world
          </h3>
          <p className="text-sm text-justify">
            Boubyan Group is a leading renowned financial institution that provides reliable and sound products and solutions with the promise of
            stable growth, secure and sustainable results.
            <br />
            <br />
            Translating our strong belief in the core role of technology in the progress and advancement of all our activities, the Group has founded
            Boubyan Digital Factory to support and strengthen the culture of innovation in a digitally driven environment that builds on the achieved
            successes to prepare for future milestones.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Section2;
