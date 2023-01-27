import "../styles.css"
import "../../styles/category.css";

export const FoodCategoryShow = (props) => {

            return (
                <>

            <li>
                <a href={'/food/category/'+ props.categoryId} class="card">
                    <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img class="card__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                            <div class="card__header-text">
                                <h3 class="card__title">{props.categoryName}</h3>
                            </div>
                        </div>
                        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                </a>
            </li>

        </>
    )
}