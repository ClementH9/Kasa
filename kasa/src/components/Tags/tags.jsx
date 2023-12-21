const Tags = ({tags}) => { 
        return (
<div className="tags-logement">
    {tags.map((tag, i) => (
            <div className="style-tag" key={i}>
                {tag}
            </div>
        )
             )}
</div> )

}

export default Tags;