import * as React from 'react';

export class Home extends React.Component {
  render() {
    return (
       <section class="content catalog">
        <div class="grid-container catalog__content">
          <div class="catalog__filters sm-hidden xs-hidden col-md-3 col-lg-3 col-xl-3">
            <div class="test">
              TEST
            </div>
          </div>
          <div class="grid-container catalog__products col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <div class="catalog__item col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="product">
                <div class="product__preview preview">
                  <img class="preview__image" src="../../assets/images/image2@2x.jpg"/>
                  <div class="preview__overlay">
                  </div>
                  <button class="preview__btn">quick view</button>
                </div>
                <div class="product__details">
                  <div class="product__description">
                    Some cool productdasdasd
                  </div>
                  <div class="product__price">
                    500$
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog__item col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="product">
                <div class="product__preview preview">
                  <img class="preview__image" src="../../assets/images/image@2x.jpg"/>
                  <div class="preview__overlay">
                  </div>
                  <button class="preview__btn">quick view</button>
                </div>
                <div class="product__details">
                  <div class="product__description">
                    Some cool product
                  </div>
                  <div class="product__price">
                    500$
                  </div>
                </div>
              </div>
            </div>
            <div class="catalog__item col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <div class="product">
                <div class="product__preview preview">
                  <img class="preview__image" src="../../assets/images/image2@2x.jpg"/>
                  <div class="preview__overlay">
                  </div>
                  <button class="preview__btn">quick view</button>
                </div>
                <div class="product__details">
                  <div class="product__description">
                    Some cool product
                  </div>
                  <div class="product__price">
                    500$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}