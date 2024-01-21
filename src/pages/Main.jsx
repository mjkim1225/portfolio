import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [skillsetData, setSkillsetData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("/portfolio/data/PortfolioListMockData.json"),
        axios.get("/portfolio/data/SkillsetMockData.json"),
      ])
      .then(
        axios.spread((responseA, responseB) => {
          setPortfolioData(responseA.data.result.reverse());
          setSkillsetData(responseB.data.result);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="w-screen bg-[url('/images/bg_square.png')] bg-auto bg-repeat">
      <div className="flex flex-col w-3/4 lg:w-2/3 m-auto py-8">
        {/* Intro */}
        <section className="flex flex-col justify-center items-center w-full h-full py-8">
          <h1 className="text-6xl font-bold">
            안녕하세요.
            <br />
            저는 김민정입니다.
          </h1>
        </section>

        {/* Portfolio */}
        <section className="py-8">
          <h2 className="text-3xl font-semibold">Portfolio</h2>
          <ol>
            <li className="flex gap-8 lg:gap-4 py-8 flex-col lg:flex-row">
              <div className="basis-0 lg:basis-60">
                <h3 className="text-2xl">Gaia3D</h3>
                <p className="font-thin text-[#555]">(재직중)</p>
                <span className="font-thin text-[#555]">2020.01.20 ~</span>
              </div>

              <ol className="flex-1">
                <li>
                  <ul className="flex flex-col gap-8">
                    {portfolioData.map(
                      (
                        {
                          projectName,
                          description,
                          techStacks,
                          mainTask,
                          date,
                        },
                        index
                      ) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-col gap-2 relative"
                          >
                            <h4 className="flex items-center ml-2 pr-10 text-2xl truncate font-semibold ">
                                [{date}] {projectName}
                            </h4>
                            <ul className="flex flex-col gap-2 pl-3">
                              <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                                <h5>설명</h5>
                                <span>{description}</span>
                              </li>
                              <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                                <h5>기술 스택</h5>
                                <span>{techStacks.join(", ")}</span>
                              </li>
                              <li className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full">
                                <h5>주요 작업</h5>
                                {
                                  mainTask.map((item, index) => {
                                    return (
                                      <li key={index}>- {item}</li>
                                    );
                                  })
                                }
                              </li>
                            </ul>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </section>

        {/* Skillset */}
        <section className="py-8">
          <h2 className="text-3xl font-semibold">Skillset</h2>
          <ol>
            <li className="flex gap-8 lg:gap-4 py-8 flex-col lg:flex-row">
              <div className="basis-0 lg:basis-60">
              </div>

              <ol className="flex-1">
                <li>
                  <ul className="flex flex-col gap-8">
                    {skillsetData.map(
                      ({ stackImage, stackName, description }, index) => {
                        return (
                          <li key={index} className="flex flex-col gap-2">
                            <h4 className="flex items-center gap-1 text-2xl">
                              <img
                                src={stackImage}
                                alt={`${stackImage} 로고`}
                                className="w-6 h-6"
                              />
                              {stackName}
                            </h4>
                            <ul className="flex flex-col gap-2 pl-3">
                              {description.map((item, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="relative block pl-3 before:content-[''] before:block before:w-1 before:h-1 before:absolute before:top-[10px] before:left-1 before:bg-[#000] before:rounded-full"
                                  >
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <section className="py-8">
          <div className="flex justify-between items-center py-6 before:content-[''] before:block before:w-0 before:h-full lg:before:w60">
            <div className="flex items-end lg:items-center gap-4 lg:flex-row">
              <div className="flex flex-col items-end gap-4">
                <h2 className="text-base text-right font-semibold">
                  김민정
                  <em className="block text-xs font-thin text-[#555 not-italic tracking-wide">
                    공간 정보 풀스택 개발자
                  </em>
                </h2>

                <ul className="flex gap-2">
                  <li>
                    <a href="mailto:01026599478a@gamil.com" className="block w-8 h-8">
                      <img src="portfolio/images/contact/gmail.svg" alt="gmail" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative w-16 h-16 lg:w-24 lg:h-24">
                <img
                  src="portfolio/images/me3x4.jpeg"
                  alt="김민정 프로필 사진"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
