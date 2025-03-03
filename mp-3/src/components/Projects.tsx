import { styled } from 'styled-components';



export default function Projects() {
    return (
        <>
            <main>
                <ul>
                     {/*-- PYCO --*/}
                    <li>
                        <h3><a href="https://github.com/akemisai/EdwardMarecos-AkemiSai-PYCO">Pyco</a>&#128279</h3>
                        <p>
                            A social media platform where users can organize their wardrobe, request outfit suggestions,
                            and engage with a community of fashion enthusiasts.
                            The app features a dynamic request system, public and private outfit sharing, and community
                            recognition through leaderboards and achievements.
                        </p>

                        <h4><strong>Technologies Used:</strong></h4>
                        <p>Kotlin, Firebase, Jetpack Compose.</p> <br/>

                        <h4><strong>Collaborator:</strong> <a href="https://www.linkedin.com/in/akemi-sai-238607237/">Akemi
                            Sai</a></h4><br/>

                        <h4><strong>Key Features:</strong></h4>
                        <ul>
                            <li>Request-based outfit creation system with social features like likes, comments, and
                                shares.
                            </li>
                            <li>Integrated Firebase for authentication and real-time database management.</li>
                            <li>Dynamic UI/UX design using Jetpack Compose.</li>
                        </ul>
                        <br/>
                        <hr/>
                    </li>

                    {/*-- Notes App --*/}
                    <li>
                        <h3><a href="https://github.com/EdwardMarecos/cs412/tree/master/project">Collaborative Notes
                            App</a>&#128279</h3>
                        <p>
                            A platform designed to help users create, organize, and share study notes with a
                            collaborative and social twist. The app includes functionality for liking,
                            bookmarking, and copying notes into personal libraries.
                        </p>

                        <h4><strong>Technologies Used:</strong></h4>
                        <p>HTML, CSS, Django, JavaScript.</p> <br/>

                        <h4><strong>Key Features:</strong></h4>
                        <ul>
                            <li>User-friendly interface for uploading and organizing notes.</li>
                            <li>Social features like likes, bookmarks, and a feed for collaborative sharing.</li>
                            <li>Integration with Django to manage user authentication and database queries.</li>
                        </ul>
                        <br/>
                        <!-- I chose to use the iframe to embed the video rather than save it to the files, since it was already uploaded; also i made a div video wrapper that keeps aspect ratio for the video-->
                        <div id="video-wrapper">
                            <iframe width="789" height="444" src="https://www.youtube.com/embed/s3t-FEGyKUE"
                                    title="cs412_final_project_notesapp" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen></iframe>
                        </div>
                        <br/>
                        <hr/>
                    </li>

                    <!-- Tetris -->
                    <li>
                        <h3><a href="https://github.com/EdwardMarecos/tetris">Tetris AI</a>&#128279</h3>
                        <p>
                            A neural network which excels at playing Tetris, learning from its prior mistakes and
                            recognizing patterns <br/>
                            that lead to rewards.
                        </p>

                        <h4><strong>Technologies Used:</strong></h4>
                        <p>Java, Flask, Sepia.</p> <br/>

                        <h4><strong>Key Features:</strong></h4>
                        <ul>
                            <li>Designed and implemented a Tetris-playing AI using a neural network-based Q-learning
                                agent.
                            </li>
                            <li>Engineered a multi-layer neural network to predict optimal moves, utilizing features
                                like board configuration, column heights, and well depths to inform decision-making.
                            </li>
                            <li>Developed a custom reward function to enhance AI performance by incentivizing favorable
                                board states and penalizing risky configurations.
                            </li>
                            <li>Trained the AI to adapt its strategy dynamically, resulting in improved gameplay and
                                higher scores during testing phases.
                            </li>
                        </ul>
                        <br/>
                        <hr/>
                    </li>

                    <!-- Battleship -->
                    <li>
                        <h3><a href="https://github.com/EdwardMarecos/Battleship-AI">Battleship AI</a>&#128279</h3>
                        <p>
                            A multiplayer web-based implementation of the classic strategy game Battleship. The project
                            involved designing the game logic, user interaction, and <br/>
                            game state management for competitive play.
                        </p>

                        <h4><strong>Technologies Used:</strong></h4>
                        <p>Java, Flask, Sepia.</p><br/>

                        <h4><strong>Key Features:</strong></h4>
                        <ul>
                            <li>Designed and implemented game logic and intelligent AI to provide a competitive gameplay
                                experience.
                            </li>
                            <li>Real-time multiplayer gameplay with a turn-based system.</li>
                            <li>Backend implementation using Flask to manage game states and interactions.</li>
                        </ul>
                        <br/>
                        <hr/>
                    </li>

                    <!-- JS Calc -->
                    <li id="list-calculator">
                        <div id="description-pane">
                            <h3>JS Calculator</h3>
                            <p>
                                A javascript calculator made locally.
                            </p>

                            <h4><strong>Technologies Used:</strong></h4>
                            <p>HTML, CSS, JS.</p><br/>

                            <h4><strong>Key Features:</strong></h4>
                            <ul>
                                <li>Accessibility compliant</li>
                                <li>Can do basic arithmetic</li>
                                <li>Negative outputs are red</li>
                            </ul>
                        </div>
                        <div id="calc-project-pane">
                            <label htmlFor="val1"> First Number </label><br/><input id="val1" name="val1"/><br/>
                            <label htmlFor="val2"> Second Number </label><br/><input id="val2" name="val2"/><br/>
                            <button onClick="addition()">+</button>
                            <button onClick="subtract()">-</button>
                            <button onClick="multiply()">*</button>
                            <button onClick="divide()">/</button>
                            <button onClick="power()">**</button>
                            <button onClick="reset()">Reset</button>
                            <h3 id="output-val"></h3>
                        </div>

                    </li>

                </ul>
            </main>
        </>
    )
}