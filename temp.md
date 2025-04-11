<form method="post" action="/admin/addExtraCategory" enctype="multipart/form-data">
                                    <div class="mb-3">
                                        <label class="form-label">Extra-Category Name</label>
                                        <input type="text" name="name" class="form-control" >
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Extra-Category Image</label>
                                        <input type="file" name="image" class="form-control" >
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Select Category</label>
                                        <select name="categoryId" class="form-select" required>
                                            <% categories.forEach(function(category) { %>
                                                <option value="<%= category._id %>">
                                                    <%= category.name %>
                                                </option>
                                                <% }) %>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Select Sub-Category</label>
                                        <select name="subCategoryId" class="form-select" required>
                                            <% subCategories.forEach(function(sub) { %>
                                                <option value="<%= sub._id %>">
                                                    <%= sub.name %>
                                                </option>
                                                <% }) %>
                                        </select>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Add Extra-Category</button>
                                </form>