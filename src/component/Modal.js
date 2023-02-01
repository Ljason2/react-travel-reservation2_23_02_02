import Seoul from '../image/seoul.webp'
import Gyeongju from '../image/Gyeongju.webp'
import Jeju from '../image/jeju.jpg'
import Yeosu from '../image/Yeosu.jpg'
import {AiFillCloseSquare} from "react-icons/ai";



function Modal({blockChange,setBlockChange,setBlockChange2}){
    return(
        <>
        <div id="modal" style={{display:`${blockChange}`}}>
            <section>
            <div
            onClick={
                ()=>{
                    setBlockChange2("block")
                    setBlockChange("none")
                }
            }
            ><AiFillCloseSquare /></div>
            <figure>
                <img src={Seoul} alt="Seoul" />
                <figcaption>
                <dl>
                    <dt>서울</dt>
                    <dt>추천 여행지&darr;</dt>
                    <dd>N서울타워 / 명동 / 경복궁 / 북촌한옥마을 /
                        명동난타극장 / 이화여자대학교 / 청계천 /
                        남산공원 / 페인터즈 
                    </dd>
                </dl>
                </figcaption>
            </figure>
            <figure>
                <img src={Gyeongju} alt="Gyeongju" />
                <figcaption>
                <dl>
                    <dt>경상도</dt>
                    <dt>추천 여행지&darr;</dt>
                    <dd>거제도 / 경주 양동마을 / 남해 독일마을 다랭이마을 / 대구 수성못 /
                        산청 동의보감촌 / 안동 하회마을
                    </dd>
                </dl>
                </figcaption>
            </figure>
            <figure>
                <img src={Jeju} alt="Jeju" />
                <figcaption>
                <dl>
                    <dt>제주도</dt>
                    <dt>추천 여행지&darr;</dt>
                    <dd>
                    우도 / 한라산 국립공원 / 용두암 / 에코랜드 /
                        제주난타전용관 / 산굼부리 / 누웨마루 거리 /
                        올레길 / 만장굴
                    </dd>
                </dl>
                </figcaption>
            </figure>
            <figure>
                <img src={Yeosu} alt="yeosu" />
                <figcaption>
                <dl>
                    <dt>경기도</dt>
                    <dt>추천 여행지&darr;</dt>
                    <dd>
                    의왕 레일파크 / 포천 아트밸리 / 물향기 수목원 / 화성 율암온천 /
                     평택호 관광단지 / 전곡 선사 박물관
                    </dd>
                </dl>
                </figcaption>
            </figure>
            </section>
        </div>
        </>
    )
}



export default Modal;