import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import coverPic0 from '../../../images/covers/pic__COLOR_pic.jpg';
import coverPic1 from '../../../images/covers/pic__COLOR_pic-1.jpg';
import coverPic2 from '../../../images/covers/pic__COLOR_pic-2.jpg';
import coverPic3 from '../../../images/covers/pic__COLOR_pic-3.jpg';
import coverPic4 from '../../../images/covers/pic__COLOR_pic-4.jpg';
import coverPic5 from '../../../images/covers/pic__COLOR_pic-5.jpg';
import coverPic6 from '../../../images/covers/pic__COLOR_pic-6.jpg';
import coverPic7 from '../../../images/covers/pic__COLOR_pic-7.jpg';
import coverPic8 from '../../../images/covers/pic__COLOR_pic-8.jpg';
import coverPic9 from '../../../images/covers/pic__COLOR_pic-9.jpg';
import coverPic10 from '../../../images/covers/pic__COLOR_pic-10.jpg';
import coverPic11 from '../../../images/covers/pic__COLOR_pic-11.jpg';
import coverPic12 from '../../../images/covers/pic__COLOR_pic-12.jpg';
import coverPic13 from '../../../images/covers/pic__COLOR_pic-13.jpg';
import coverPic14 from '../../../images/covers/pic__COLOR_pic-14.jpg';
import coverPic15 from '../../../images/covers/pic__COLOR_pic-15.jpg';

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <MoviesCard
          img={coverPic0}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic1}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic2}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic3}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic4}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic5}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic6}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic7}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic8}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic9}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic10}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic11}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic12}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic13}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic14}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
        <MoviesCard
          img={coverPic15}
          title={'33 слова о дизайне'}
          duration={'1ч42м'}
        />
      </div>
      <button className="movies-card-list__button">Еще</button>
    </div>
  );
}

export default MoviesCardList;
