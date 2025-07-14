import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const OurStart = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                Our Start
                            </span>
                        </div>
                    </Container>
                    <Container delay={0.1} className="flex grow">
                        <h2 className="text-3xl md:text-4xl font-semibold text-left md:text-center mt-4">
                            Why We Built AgencyGrow
                        </h2>
                    </Container>
                    <Container delay={0.3} className="max-w-2xl mx-auto">
                        <p className="text-base md:text-lg text-muted-foreground text-left md:text-center mt-4 max-w-2xl">
                            <span className="text-balance">
                                We started AgencyGrow with one mission — to help businesses stop wasting money on ads that don’t work. After seeing brands struggle with cookie-cutter campaigns and bloated strategies, we knew there had to be a better way. So we combined creativity, strategy, and data into one seamless system — and built an agency that’s as obsessed with your results as you are.
                            </span>
                            <br />
                            <br />
                            <span className="mt-4 text-balance">
                                We’re a tight-knit team of seasoned experts with 5+ years of experience helping brands scale through strategy, not guesswork.
                            </span>
                        </p>
                    </Container>

                    <Container delay={0.5} className="w-full max-w-4xl mx-auto">
                        <div className="mt-10 w-full">
                            <div className="flex flex-col items-center justify-center text-center h-80 w-full bg-primary rounded-xl lg:rounded-2xl p-6">
                                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black">
                                    Ads that make people <br className="hidden lg:block" /> stop, click, and remember.
                                </h3>
                                <a href="https://www.instagram.com/agencygrow_/">
                                    <Button size="md" variant="black" className="mt-6">
                                        Discover Our Process
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default OurStart
