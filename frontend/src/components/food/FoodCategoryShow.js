import "../../styles/category.css";

export const FoodCategoryShow = (props) => {
    return (
        <>
            <li>
                <a href={'/food/category/'+ props.categoryId} class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLwNvtRCA6VJg1ixits6DxoMGF0K--4EdOA&usqp=CAU" class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img class="card__thumb" src="https://i.imgur.com/2DhmtJ4.jpg" alt="" />
                            <div class="card__header-text">
                                <h3 class="card__title">{props.categoryName}</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </>
    )
}