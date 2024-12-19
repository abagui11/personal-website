
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row} from "react-bootstrap"
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import social_media_crypto_prices from './Social_Media_Crypto_Prices.pdf'
import evo from './evolution_gaming.pdf'
import netflix from './Netflix_Bear_Thesis.pdf'
import etsy from './Etsy_Long_Thesis.pdf'
import cardano from './cardano.pdf'
import polkadot from './polkadot.pdf'
import nbd_legumes from './NBD Models on Legumes.pdf'
import wg_nft_marketplaces from './NFT Marketplace.pdf'


export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="project" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="job-bx wow zoomIn">
                        <h2>Apps and Scripts</h2>
                        <p id = "number_count">7 total</p>
    
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a target = "_blank" href = "https://github.com/abagui11/letterboxd-for-albums">
                                <div class="panel">
                                    <h5 class="panel-title">Letterboxd for Music</h5>
                                    <div class="panel-content">
                                        <p>A boilerplate letterboxd clone that for artists and albums. Frontend: React | Backend: Node.js, Express | Database: PostgreSQL</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://www.playlistpot.com/">
                                <div class="panel">
                                    <h5 class="panel-title">Playlist Pot</h5>
                                    <div class="panel-content">
                                        <p>A simple way to make playlists by mixing your favorite artists, albums, and tracks together.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://github.com/abagui11/dydx-stat-arby">
                                <div class="panel">
                                    <h5 class="panel-title">DYDX Trading Bot</h5>
                                    <div class="panel-content">
                                        <p>A bot that uses the DYDX perpetuals exchange to trade cryptocurrencies based on a statistical arbitrage strategy. Hosted on AWS, profitability uncertain.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://github.com/orgs/Potent-Network/repositories">
                                <div class="panel">
                                    <h5 class="panel-title">VO2 - Athlete NFT Platform</h5>
                                    <div class="panel-content">
                                        <p>A social platform for athletes to sell NFTs to fans and interact with them more directly. I wore many hats, including product manager and developer. </p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://github.com/abagui11/trading-algo">
                                <div class="panel">
                                    <h5 class="panel-title">Crypto Trading Algorithm</h5>
                                    <div class="panel-content">
                                        <p>A trading algorithm that makes buy and sell recommendations on various crypto coins based on standard deviation movements of social media movement. Sole developer.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://github.com/abagui11/cowboy-samurai">
                                <div class="panel">
                                    <h5 class="panel-title">Cowboy Samurai</h5>
                                    <div class="panel-content">
                                        <p>A game where you play as a Cowboy Samurai and fight crabs. Made entirely using Java inspired by Kaarin Gaming. Sole developer.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            
                            <div className="item">
                                
                                <div class="panel">
                                    <h5 class="panel-title">PennPals</h5>
                                    <div class="panel-content">
                                        <p>A messaging platform that allows users to connect to a server and chat with each other privately, or in group chats. Sole developer, class project.</p>
                                    </div>
                                </div>
                            </div> 
                            
                        </Carousel>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Data Analysis</h2>
                        <p id = "number_count">4 total</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a target = "_blank" href = {wg_nft_marketplaces}>
                                <div class="panel">
                                    <h5 class="panel-title">Gamma-Weibull Model and NFT Marketplaces</h5>
                                    <div class="panel-content">
                                        <p>A statistical analysis that applies a Gamma-Weibull distribution on user growth for Coinbase and LooksRare to find some interesting takeaways.</p>
                                    </div>
                                </div>
                                </a>
                            </div> 
                            
                            <div className="item">
                                <a target = "_blank" href = {nbd_legumes}>
                                <div class="panel">
                                    <h5 class="panel-title">NBD Models and Legumes</h5>
                                    <div class="panel-content">
                                        <p>A statistical analysis that applies a negative-binomial distribution on count data for legumes to see if we can predict their nodule growth.</p>
                                    </div>
                                </div>
                                </a>
                            </div> 
                            
                            <div className="item">
                                <a target = "_blank" href = "https://github.com/abagui11/crypto-report-generator">
                                <div class="panel">
                                    <h5 class="panel-title">Crypto Report Generator</h5>
                                    <div class="panel-content">
                                        <p>A Python script that automatically generates up to date data reports for the inputted crypto token as well as providing buy and sell recommendations.</p>
                                    </div>
                                </div>
                                </a>
                            </div> 
                            
                            <div className="item">
                                <a target = "_blank" href = {social_media_crypto_prices}>
                                <div class="panel">
                                    <h5 class="panel-title">Predicting Price through Social Media</h5>
                                    <div class="panel-content">
                                        <p>A statistical report that analyzes the correlation between various social medias and sentiment towards token price. No significant correlation was found.</p>
                                    </div>
                                </div>
                                </a>
                            </div> 
                        </Carousel>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Research Reports</h2>
                        <p id = "number_count">12 total</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a target = "_blank" href = "https://medium.com/@bagui.arpan/market-analysis-liquid-staking-derivatives-4bdbf6b65c84">
                                    <div class="panel">
                                        <h5 class="panel-title">Market Analysis: Liquid Staking Derivatives</h5>
                                        <div class="panel-content">
                                            <p>A market analysis on liquid staking derivatives and their profitability.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://medium.com/@bagui.arpan/market-analysis-on-chain-debt-80a2307e8798">
                                    <div class="panel">
                                        <h5 class="panel-title">Market Analysis: On-Chain Debt</h5>
                                        <div class="panel-content">
                                            <p>A market analysis on on-chain debt financing solutions and tokenized bond protocols.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://medium.com/@bagui.arpan/market-size-crypto-payment-processing-df315d10ccb0">
                                    <div class="panel">
                                        <h5 class="panel-title">Market Size: Crypto Payment Processing</h5>
                                        <div class="panel-content">
                                            <p>A market sizing analysis on payment processing layers for cryptocurrencies.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a target = "_blank" href = "https://medium.com/@bagui.arpan/market-size-web3-hot-wallets-9c25fbb97419">
                                    <div class="panel">
                                        <h5 class="panel-title">Market Size: Web3 Hot Wallets</h5>
                                        <div class="panel-content">
                                            <p>A market sizing analysis hot wallet providers in Web3.</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 
                            <div className="item">
                                <a target = "_blank" href = "https://medium.com/@bagui.arpan/market-size-defi-lending-906bb82b9c29">
                                    <div class="panel">
                                        <h5 class="panel-title">Market Size: DeFi Lending</h5>
                                        <div class="panel-content">
                                            <p>A market sizing analysis of borrowing and lending protocols on DeFi.</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 
                            <div className="item">
                                <a target = "_blank" href = "https://medium.com/@bagui.arpan/market-size-cross-chain-collateralization-fd00fd1ea113">
                                    <div class="panel">
                                        <h5 class="panel-title">Market Size: Cross-Chain Collateralization</h5>
                                        <div class="panel-content">
                                            <p>A market sizing analysis of the cross-chain collateralization and unified credit layer market.</p>
                                        </div>
                                    </div>
                                </a>
                            </div> 
                            <div className="item">
                            <a target = "_blank" href = {netflix}>
                                <div class="panel">
                                    <h5 class="panel-title">Netflix Bear Thesis, 1/15/22</h5>
                                    <div class="panel-content">
                                        <p>A bear thesis on Netflix that predicts a decline in pricing power caused by streaming service competition.</p>
                                    </div>
                                </div>
                            </a>
                            </div> 
                            <div className="item">
                            <a target = "_blank" href = {etsy}>
                                <div class="panel">
                                    <h5 class="panel-title">Etsy Long Thesis, 6/19/21 </h5>
                                    <div class="panel-content">
                                        <p>A long thesis on Etsy that positions this e-commerce giant as a player that can capture the niche Amazon left behind.</p>
                                    </div>
                                </div>
                            </a>
                            </div> 
                            <div className="item">
                            <a target = "_blank" href = {evo}>
                                <div class="panel">
                                    <h5 class="panel-title">Evolution Gaming Long Thesis, 2/15/21</h5>
                                    <div class="panel-content">
                                        <p>A long thesis on mid-cap company Evolution Gaming, showing EVO's strong market position.</p>
                                    </div>
                                </div>
                            </a>
                            </div> 
                            <div className="item">
                            <a target = "_blank" href = {cardano}>
                                <div class="panel">
                                    <h5 class="panel-title">Cardano Overview</h5>
                                    <div class="panel-content">
                                        <p>An overview on Cardano L1 ecosystem. Differentiators, roadmap, story, etc.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="item">
                            <a target = "_blank" href = {polkadot}>
                                <div class="panel">
                                    <h5 class="panel-title">Polkadot Overview</h5>
                                    <div class="panel-content">
                                        <p>An overview on Polkadot L1 ecosystem. Differentiators, roadmap, story, etc.</p>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}