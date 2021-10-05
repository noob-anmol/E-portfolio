import GroupCollage from "../static/GroupCollage.png";
const LivConWeek2 = () => {
  return (
    <section className=" text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="intro-picture"
            className=" rounded-3xl border-purple-500 border-4 object-cover object-center h-full w-full"
            src={GroupCollage}
          ></img>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                  fill="#E0E7FF"
                />
                <path
                  d="M25.4757 20.9027C24.7561 20.1825 23.9152 19.5947 22.9917 19.1662C24.2941 18.1111 25.1249 16.5011 25.1249 14.6956C25.1249 11.5101 22.4685 8.89677 19.283 8.94564C16.1464 8.99452 13.6193 11.5504 13.6193 14.6956C13.6193 16.5011 14.453 18.1111 15.7525 19.1662C14.8288 19.5944 13.9879 20.1822 13.2685 20.9027C11.6988 22.4753 10.8075 24.551 10.75 26.7648C10.7493 26.7955 10.7547 26.826 10.7659 26.8546C10.7771 26.8831 10.7939 26.9092 10.8153 26.9311C10.8368 26.9531 10.8624 26.9706 10.8907 26.9825C10.919 26.9944 10.9493 27.0005 10.98 27.0005H12.59C12.7136 27.0005 12.8171 26.9028 12.82 26.7792C12.8746 25.1117 13.5503 23.5505 14.7376 22.3661C15.3452 21.7552 16.0679 21.271 16.8639 20.9413C17.6599 20.6117 18.5134 20.4432 19.375 20.4456C21.1258 20.4456 22.7732 21.1269 24.0123 22.3661C25.1968 23.5505 25.8724 25.1117 25.9299 26.7792C25.9328 26.9028 26.0363 27.0005 26.1599 27.0005H27.7699C27.8006 27.0005 27.831 26.9944 27.8593 26.9825C27.8876 26.9706 27.9132 26.9531 27.9346 26.9311C27.9561 26.9092 27.9729 26.8831 27.9841 26.8546C27.9953 26.826 28.0007 26.7955 27.9999 26.7648C27.9424 24.551 27.0512 22.4753 25.4757 20.9027ZM19.375 18.3756C18.3917 18.3756 17.466 17.9932 16.7731 17.2975C16.4254 16.9525 16.1507 16.541 15.9655 16.0876C15.7803 15.6341 15.6883 15.148 15.695 14.6582C15.7036 13.7152 16.0803 12.8039 16.7386 12.1282C17.4286 11.421 18.3515 11.0271 19.3376 11.0156C20.3122 11.007 21.2581 11.3865 21.9538 12.0679C22.6668 12.7665 23.0578 13.7009 23.0578 14.6956C23.0578 15.6789 22.6755 16.6017 21.9797 17.2975C21.6384 17.6404 21.2324 17.9123 20.7853 18.0974C20.3382 18.2824 19.8589 18.377 19.375 18.3756ZM12.1732 15.4546C12.1473 15.2045 12.1329 14.9515 12.1329 14.6956C12.1329 14.2385 12.176 13.7929 12.2565 13.3587C12.2767 13.2552 12.222 13.1489 12.1272 13.1057C11.7362 12.9304 11.3768 12.6889 11.0663 12.3841C10.7004 12.0294 10.4125 11.6022 10.2209 11.13C10.0294 10.6578 9.93834 10.1508 9.95367 9.64139C9.97954 8.71852 10.3504 7.84165 10.9973 7.1804C11.7074 6.45303 12.6619 6.05629 13.6768 6.06779C14.5939 6.07641 15.4794 6.43003 16.1493 7.05678C16.3764 7.26953 16.5719 7.50528 16.7357 7.75828C16.7932 7.8474 16.9054 7.88477 17.0031 7.85028C17.5091 7.6749 18.0439 7.55128 18.593 7.49378C18.754 7.47653 18.846 7.30403 18.7741 7.16028C17.8397 5.31167 15.9308 4.03517 13.7228 4.00067C10.5344 3.9518 7.87793 6.56516 7.87793 9.74776C7.87793 11.5533 8.7088 13.1632 10.0112 14.2184C9.09692 14.641 8.25455 15.2246 7.52431 15.9548C5.94882 17.5275 5.05757 19.6032 5.00007 21.8198C4.9993 21.8505 5.00469 21.881 5.0159 21.9096C5.02712 21.9382 5.04394 21.9642 5.06537 21.9862C5.0868 22.0081 5.11242 22.0256 5.14071 22.0375C5.16899 22.0494 5.19938 22.0556 5.23007 22.0556H6.84294C6.96656 22.0556 7.07006 21.9578 7.07293 21.8342C7.12756 20.1667 7.80318 18.6056 8.99055 17.4211C9.83579 16.5758 10.8708 15.9893 12.0007 15.7047C12.1128 15.676 12.1875 15.5696 12.1732 15.4546V15.4546Z"
                  fill="#6366F1"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                About us
              </h2>
              <p className="leading-relaxed text-base">
                We are team TechStars and our quote is{" "}
                <span className="font-semibold">
                  We fall, We break, We fail, But then, We rise, We heal, We
                  overcome.
                </span>
                <br></br>
                Our team consists of 06 members. You can know more about them{" "}
                <a href="/team" className="hover:underline" target="_blank">
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LivConWeek2;
