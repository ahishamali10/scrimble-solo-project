
const Testimonial = ({children}) => {

    return (
        <div className="testimonial">
            <div className='testimonial-content'>
                <div>
                    <img className='image'
                         src="https://s3-alpha-sig.figma.com/img/ebbd/218e/43da4fc0a30598c1777461ca480d0fde?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjWESCTEXcwgLVm2Q~U76cbepXYgPEJK78g7~0I1RWImyDPThIG-1MoAv4U8xjVMNYlO4eYHXTwg5n8dTuivXfytKGnHz4DIPXhPeBWMgumeAWvF3x5DI6NGweCe8ZhxyUHlmB8i3ywLKAJskLXGQ5X1h2PgfrNki7bpMYEHgUefhcEuaFaPBfQ6BssloHlGqOq8tqCa0aey62YnI9jVWIkPWcZTHjyLJKQVFofAPIZOia6XaTK3JJlBKZG1s2gYNHOUCo7Mu0TO3v1XXXblkibciYS-nvcv6W1D~uBUa6lqnsxOiLoAYbRZ7PbhVtVYXiNOE16ZJU3Abg20RQ098g__"
                         alt="image"/>
                </div>
                <div>
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.028 0C5.684 5.184 0.5 13.68 0.5 23.04C0.5 30.672 5.108 35.136 10.436 35.136C15.476 35.136 19.22 31.104 19.22 26.352C19.22 21.6 15.908 18.144 11.588 18.144C10.724 18.144 9.572 18.288 9.284 18.432C10.004 13.536 14.612 7.776 19.22 4.896L13.028 0ZM37.796 0C30.596 5.184 25.412 13.68 25.412 23.04C25.412 30.672 30.02 35.136 35.348 35.136C40.244 35.136 44.132 31.104 44.132 26.352C44.132 21.6 40.676 18.144 36.356 18.144C35.492 18.144 34.484 18.288 34.196 18.432C34.916 13.536 39.38 7.776 43.988 4.896L37.796 0Z"
                            fill="white" fill-opacity="0.25"/>
                    </svg>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                    <div>
                        <span>May Andersons</span>
                        <span>Workcation, CTO </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;