{{#Books}}
	<div class='columns'>
		<div class='cell-wrapper'>
			<div class='ribbon'>{{isbn}}</div>
			<div class='img'>
				<img src='{{Image}}'/>
				<div class='short-detail'>
					<div class='title'><a class="more-detail" id="title-{{id}}" href="#{{id}}">{{Title}}</a></div>
					<div class='author'>by Author</div>
					<div class='description'>{{shortDescription}}...</div>
				</div>
			</div>
		    <div class='link'><a href='#{{id}}' class="more-detail" id="book-{{id}}">Learn More -></a></div>
		</div>
	</div>
{{/Books}}
{{^Books}}
  No More Books are available !!
{{/Books}}

