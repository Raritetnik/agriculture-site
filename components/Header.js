import Button from './Button';

export default function Header({ urlBackground }) {
    return(
        <header
        className='w-full flex justify-start items-center relative' style={{ minHeight: 500 }}>
            <img src={`${urlBackground}`} alt="" className="w-full"/>
            <section className="block mx-52 absolute max-w-md">
                <h6 className=''
                style={{ color: 'var(--color-green)', fontSize: 'var(--text-size_h6)',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontFamily: 'Yellowtail'}}
                >100$ Natural Food</h6>
                <h1 className="font-black py-5"
                style={{ fontSize: "var(--text-size_h1)", lineHeight: '4.5rem' }}>Choose the best healthier way of life</h1>
                <Button name='Explore Now' color='var(--color-yellow)'/>
            </section>
        </header>
    )
}