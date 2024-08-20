import CountUp from 'react-countup';

const Counter = ({end,text,style}) => {
    return (
        <div className={`${style} my-6 inline-block`}>
            <CountUp start={0} end={end} delay={0} duration={1} className='font-Satoshi font-bold text-3xl inline-block'></CountUp><p className='font-Satoshi inline-block font-bold text-3xl'>+</p>
            <p className='text-stone-600 font-Satoshi text-xl'>{text}</p>
        </div>
    );
};

export default Counter;